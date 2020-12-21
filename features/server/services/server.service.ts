import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ServerService {
  constructor() {}

  getAll(): Observable<any> {
    return of({});
    // return this.serversGQL.watch().valueChanges.pipe(map((result) => result.data.servers));
  }

  get(id: string): Promise<any> {
    return of({}).toPromise();
    // return this.serverGQL
    //   .fetch({ id: id })
    //   .pipe(map((result) => result.data.server))
    //   .toPromise();
  }

  add(server): Promise<any> {
    return of({}).toPromise();
    // return this.addServerGQL
    //   .mutate({ input: server })
    //   .pipe(map((result) => result.data.addServer))
    //   .toPromise();
  }

  update(id: string, server): Promise<any> {
    return of({}).toPromise();

    // console.log(server);
    // return this.updateServerGQL
    //   .mutate({ id: id, input: server })
    //   .pipe(map((result) => result.data.updateServer))
    //   .toPromise();
  }

  delete(id: string): Promise<any> {
    return of({}).toPromise();

    // return this.deleteServerGQL
    //   .mutate({ id: id })
    //   .pipe(map((result) => result.data.deleteServer))
    //   .toPromise();
  }
}
