import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) { }

  getValue(user_id: string): Promise<any> {
    return this.storage.get(user_id);
    
  }

  setValue(user_id: string, token: string): Promise<any> {
    return this.storage.set(user_id, token);
  }
}
