import { Injectable, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Observable, Observer } from 'rxjs';

import { MessageType } from '@core/models/api/message-type.class';
import { LoadingUtils } from '@core/utils/loading.utils';
import { environment } from '@environments/environment';
import { ErrorStatus } from './error-status.enum';
import { Request } from './request.class';

@Injectable()
export class HttpPlugin {
  constructor(
    private loadingUtils: LoadingUtils,
    private http: HTTP,
    private network: Network,
    private platform: Platform,
    private zone: NgZone
  ) {
    this.http.setServerTrustMode(environment.server.sslPinning);
  }

  request<T>(service: string, parameters = {}, showLoading = true): Observable<T> {
    const request = new Request(service, parameters, {}, showLoading);

    if (showLoading) {
      this.loadingUtils.present().then(() => {
        return this.post(request);
      });
    } else {
      return this.post(request);
    }
  }

  private post<T>(request: Request): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this.http
        .post(request.url, request.parameters, request.headers)
        .then(httpResponse => {
          const response = JSON.parse(httpResponse.data);
          this.zone.run(() => {
            observer.next(response);
            observer.complete();
          });
        })
        .catch(e => observer.error(this.handleError(e)))
        .finally(() => this.loadingUtils.dismiss());
    });
  }

  private handleError(e: HTTPResponse): MessageType[] {
    const errors: MessageType[] = [];
    const error = new MessageType(e.url, e.error, e.data, e.status);

    if (this.platform.is('android') && this.network.type === this.network.Connection.NONE) {
      e.status = ErrorStatus.NOT_CONNECTED;
    }

    switch (e.status) {
      case ErrorStatus.NOT_CONNECTED:
        error.description = 'not connected';
        break;
      default:
        error.description = 'error server';
        break;
    }

    errors.push(error);

    return errors;
  }

  /* Show logs */
  private log(message: string, logs: Request | any): void {
    if (environment.logLevel === 4) {
      console.groupCollapsed(`[${new Date()}] ${message} -------------`);
      console.log(logs);
      console.groupEnd();
    }
  }
}
