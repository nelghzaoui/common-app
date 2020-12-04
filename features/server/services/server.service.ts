import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  AddServerGQL,
  DeleteServerGQL,
  ServerGQL,
  ServerInput,
  ServersGQL,
  ServerType,
  UpdateServerGQL
} from 'src/generated/graphql';

@Injectable()
export class ServerService {
  constructor(
    private readonly addServerGQL: AddServerGQL,
    private readonly deleteServerGQL: DeleteServerGQL,
    private readonly serverGQL: ServerGQL,
    private readonly serversGQL: ServersGQL,
    private readonly updateServerGQL: UpdateServerGQL
  ) {}

  getAll(): Observable<ServerType[]> {
    return this.serversGQL.watch().valueChanges.pipe(map((result) => result.data.servers));
  }

  get(id: string): Promise<ServerType> {
    return this.serverGQL
      .fetch({ id: id })
      .pipe(map((result) => result.data.server))
      .toPromise();
  }

  add(server: ServerInput): Promise<ServerType> {
    return this.addServerGQL
      .mutate({ input: server })
      .pipe(map((result) => result.data.addServer))
      .toPromise();
  }

  update(id: string, server: ServerInput): Promise<ServerType> {
    console.log(server);
    return this.updateServerGQL
      .mutate({ id: id, input: server })
      .pipe(map((result) => result.data.updateServer))
      .toPromise();
  }

  delete(id: string): Promise<ServerType> {
    return this.deleteServerGQL
      .mutate({ id: id })
      .pipe(map((result) => result.data.deleteServer))
      .toPromise();
  }
}
