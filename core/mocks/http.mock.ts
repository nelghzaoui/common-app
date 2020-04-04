import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HTTPMock extends HTTP {
  constructor(private http: HttpClient) {
    super();
  }

  post(url: string, body: any, headers: HttpHeaders): Promise<HTTPResponse> {
    const params = new HttpParams({ fromObject: body });

    return new Promise<HTTPResponse>((resolve, reject) => {
      const response: HTTPResponse = {
        status: null,
        headers: null,
        url: null,
        data: null
      };

      this.http
        .post(url, null, { headers: headers, params: params, responseType: 'text', withCredentials: true })
        .subscribe(
          (data) => {
            response.url = url;
            response.data = data;

            resolve(response);
          },
          (error: HttpErrorResponse) => {
            response.status = error.status;
            response.url = error.url;
            response.data = error.message;

            reject(response);
          }
        );
    });
  }
}
