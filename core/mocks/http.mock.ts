import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SslPinning } from '@core/models/environments';

@Injectable()
export class HTTPMock extends HTTP {
  httpResponse: HTTPResponse;

  constructor(private http: HttpClient) {
    super();
    this.httpResponse = {
      status: null,
      headers: null,
      url: null,
      data: null
    };
  }

  public setServerTrustMode(sslPinning: SslPinning): Promise<void> {
    return null;
  }

  public sendRequest(url: string, { method, data, headers }): Promise<HTTPResponse> {
    return new Promise<HTTPResponse>((resolve, reject) => {
      this.http
        .request((method as string).toUpperCase(), url, {
          body: data,
          headers: headers,
          responseType: 'text',
          withCredentials: false
        })
        .subscribe(
          (response) => {
            this.httpResponse.url = url;
            this.httpResponse.data = response;

            resolve(this.httpResponse);
          },
          (error: HttpErrorResponse) => {
            this.httpResponse.status = error.status;
            this.httpResponse.url = error.url;
            this.httpResponse.data = error.message;

            reject(this.httpResponse);
          }
        );
    });
  }
}
