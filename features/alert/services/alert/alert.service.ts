import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot } from '@angular/fire/firestore';
import { Alert } from '@alert/models/alert.class';

import { Observable } from 'rxjs';

interface AlertServiceFacade {
  createAlert(request: Alert): Promise<any>;
  getAlerts(): Observable<QuerySnapshot<Alert>>;
  // updateAlert(request: Alert): Promise<any>;
  // removeAlert(request: Alert): Promise<any>;
}
@Injectable()
export class AlertService implements AlertServiceFacade {
  private collection: AngularFirestoreCollection<Alert>;
  alerts: Observable<Alert[]>;

  constructor(readonly firestore: AngularFirestore) {
    this.collection = firestore.collection<Alert>('alerts');
    this.alerts = this.collection.valueChanges();
  }

  createAlert(alert: Alert): Promise<any> {
    return new Promise((resolve, reject) => {
      this.collection.add(alert).then(
        () => resolve(true),
        (e) => reject(e)
      );
    });
  }

  getAlerts(): Observable<QuerySnapshot<Alert>> {
    return this.collection.get();
  }

  // getAlert(id: string): Observable<QuerySnapshot<Alert>> {
  //   return this.collection.get(id);
  // }

  // updateAlert(alert: Account): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.collection.doc(alert).then(
  //       () => resolve(true),
  //       (e) => reject(e)
  //     );
  //   });
  // }

  // removeAlert(account: Account): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.collection.add(account).then(
  //       () => resolve(true),
  //       (e) => reject(e)
  //     );
  //   });
  // }
}
