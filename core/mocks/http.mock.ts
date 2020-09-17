import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SslPinning } from '@core/models/environments';

@Injectable()
export class HTTPMock extends HTTP {
  constructor(private http: HttpClient) {
    super();
  }

  public setServerTrustMode(sslPinning: SslPinning): Promise<void> {
    return null;
  }

  public post(url: string, body: HttpParams, headers: HttpHeaders): Promise<HTTPResponse> {
    return new Promise<HTTPResponse>((resolve, reject) => {
      const httpResponse: HTTPResponse = {
        status: null,
        headers: null,
        url: null,
        data: null
      };

      this.http.post(url, body, { headers: headers, responseType: 'text', withCredentials: false }).subscribe(
        (response) => {
          httpResponse.url = url;
          httpResponse.data = response;

          resolve(httpResponse);
        },
        (error: HttpErrorResponse) => {
          httpResponse.status = error.status;
          httpResponse.url = error.url;
          httpResponse.data = error.message;

          reject(httpResponse);
        }
      );
    });
  }
}
