import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerGQL, ServersGQL, ServerType } from 'src/generated/graphql';

@Injectable()
export class ServerService {
  constructor(private readonly serverGQL: ServerGQL, private readonly serversGQL: ServersGQL) {}

  getAll(): Observable<ServerType[]> {
    return this.serversGQL.watch().valueChanges.pipe(map((result) => result.data.servers));
  }

  get(id: string): Observable<ServerType> {
    return this.serverGQL.fetch().pipe(map((result) => result.data.server));
  }
}
