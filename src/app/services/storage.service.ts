import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { themeOptions } from "./theme.service";

export enum StorageKey {
    THEME = 'theme'
  }

@Injectable({
  providedIn: "root"
})
export class StorageService {
  private _storage: Storage | null = null;
  private initialized: boolean = false;
  constructor(private storage: Storage) { }
 
  public async initialize() {
    this.storage.create().then((storage) => {
      this._storage = storage;
      this.initialized = true;
    });
  }
  
  public async getTheme(): Promise<themeOptions> {
    try {
      const storageItem = await this.storage.get(StorageKey.THEME)
      console.log('storageitem', storageItem);
      return storageItem
    } catch (error) {
      console.error(error);
      
    }
   
   return 'system';
    
    
  }


}