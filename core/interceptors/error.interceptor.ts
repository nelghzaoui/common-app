import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HTTPResponse } from '@ionic-native/http';
import { Network } from '@ionic-native/network/ngx';
import { Platform } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class ErrorIntercept implements HttpInterceptor {
  constructor(private network: Network, private readonly platform: Platform) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HTTPResponse) => {
        let errorMessage = '';

        if (this.platform.is('android') && this.network.type === this.network.Connection.NONE) {
          error.status = ErrorStatus.NOT_CONNECTED;
        }

        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
