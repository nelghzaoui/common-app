import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Account } from '@account/models/account.class';

import { Observable } from 'rxjs';

interface RegistrationServiceFacade {
  createAccount(request: Account): Promise<any>;
}
@Injectable()
export class RegistrationService implements RegistrationServiceFacade {
  private collection: AngularFirestoreCollection<Account>;
  accounts: Observable<Account[]>;

  constructor(readonly firestore: AngularFirestore) {
    this.collection = firestore.collection<Account>('accounts');
    this.accounts = this.collection.valueChanges();
  }

  createAccount(account: Account): Promise<any> {
    return new Promise((resolve, reject) => {
      this.collection.add(account).then(
        () => resolve(true),
        (e) => reject(e)
      );
    });
  }
}
