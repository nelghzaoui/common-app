import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { HttpResponse } from '@capacitor-community/http';
import { from, Observable } from 'rxjs';

import { ErrorStatus, MessageType } from '@core/models/api';
import { LoadingTool } from '@core/tools/components/loading.tool';
import { environment } from '@environments/environment';
import { HTTPMethod } from './http-method.enum';
import { Request } from './request.class';

const { Network } = Plugins;

@Injectable()
export class HttpHelper {
  constructor(private readonly loadingTool: LoadingTool, private readonly platform: Platform) {
    const { Http } = Plugins;
    Http.setServerTrustMode(environment.server.sslPinning);
  }

  public get<T>(service: string, parameters = {}, showLoading = true): Observable<T> {
    return from(this.request<T>(HTTPMethod.GET, service, parameters, showLoading));
  }

  public post<T>(service: string, parameters = {}, showLoading = true): Promise<T> {
    return this.request(HTTPMethod.POST, service, parameters, showLoading);
  }

  public update<T>(service: string, parameters = {}, showLoading = true): Promise<T> {
    return this.request(HTTPMethod.PATCH, service, parameters, showLoading);
  }

  public delete<T>(service: string, parameters = {}, showLoading = true): Promise<T> {
    return this.request(HTTPMethod.DELETE, service, parameters, showLoading);
  }

  private request<T>(method: HTTPMethod, service: string, parameters = {}, showLoading: boolean): Promise<T> {
    return new Promise((resolve, reject) => {
      if (showLoading) this.loadingTool.present();

      const request = new Request(service, parameters, {}, showLoading);

      const { Http } = Plugins;
      Http.request(request.url, { method: method, data: request.parameters, headers: {} })
        .then((httpResponse: HttpResponse) => {
          const response = JSON.parse(httpResponse.data);
          this.log('REQUEST', response);
          resolve(response);
        })
        .catch((e: HttpResponse) => reject(this.handleError(e)))
        .finally(() => {
          if (showLoading) this.loadingTool.dismiss();
        });
    });
  }

  private async handleError(e): Promise<MessageType[]> {
    const errors: MessageType[] = [];
    const error = new MessageType(e.url, e.error, e.data, e.status);

    const connectionType = (await Network.getStatus()).connectionType;
    if (this.platform.is('android') && connectionType === connectionType['none']) {
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

  private log(message: string, logs: Request): void {
    if (environment.logLevel === 4) {
      console.groupCollapsed(`[${new Date()}] ${message} -------------`);
      console.log(logs);
      console.groupEnd();
    }
  }
}
