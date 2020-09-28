import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class NetworkMock extends Network {
  get type(): string {
    return 'wifi';
  }

  get downlinkMax(): string {
    return '';
  }

  onChange(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      observer.next('');
      observer.complete();
    });
  }

  onDisconnect(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      observer.next('');
      observer.complete();
    });
  }

  onConnect(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      observer.next('');
      observer.complete();
    });
  }
}
