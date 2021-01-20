import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Alert } from '@alert/models/alert.class';

interface AlertServiceFacade {
  create(request: Alert): Promise<any>;
  // updateAlert(request: Alert): Promise<any>;5Q
  // removeAlert(request: Alert): Promise<any>;
}
@Injectable()
export class AlertService implements AlertServiceFacade {
  private static COLLECTION_NAME = 'alerts';
  private collection: AngularFirestoreCollection<Alert>;
  alerts$: Observable<Alert[]>;

  constructor(readonly store: AngularFirestore) {
    this.collection = store.collection<Alert>(AlertService.COLLECTION_NAME);
    this.alerts$ = this.collection.valueChanges();
  }

  create(alert: Alert): Promise<any> {
    return new Promise((resolve, reject) => {
      this.collection.add(alert).then(
        () => resolve(true),
        (e) => reject(e)
      );
    });
  }

  get(id: string): Observable<any> {
    return this.collection.doc(id).valueChanges();
  }

  update(id: string, alert: Alert): Promise<any> {
    console.log(alert);

    return this.collection.doc(id).set(alert);
  }

  remove(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.collection
        .doc(id)
        .delete()
        .then(() => resolve(true))
        .catch((error) => reject(error));
    });
  }
}
