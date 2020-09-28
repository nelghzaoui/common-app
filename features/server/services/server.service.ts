import { Injectable } from '@angular/core';
import { HttpHelper } from '@core/helpers/http/http.helper';
import { Observable } from 'rxjs';
import { Server } from '../models/server.class';
import { AddServerRequest, SERVER_API } from './server.api';

@Injectable()
export class ServerService {
  constructor(private httpHelper: HttpHelper) {}

  public getAll(): Observable<Server[]> {
    return this.httpHelper.get<Server[]>(SERVER_API.ADD, {}, false);
  }

  public async add(server: Server): Promise<string> {
    const request: AddServerRequest = {
      server: server
    };

    const id = await this.httpHelper.post<string>(SERVER_API.ADD, request);

    return id;
  }

  // public async update(server: Server): Promise<string> {
  //   const request: AddServerRequest = {
  //     server: server
  //   };

  //   const id = await this.httpHelper.post<string>(`${SERVER_API.ADD}/${id}`, request);

  //   return id;
  // }

  // public async getAll(): Observable<Server[]> {
  //   this.httpHelper.post(SERVER_API.ADD)
  // }
}
