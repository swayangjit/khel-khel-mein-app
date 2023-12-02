import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { themeOptions } from "./theme.service";

export enum StorageKey {
    THEME = 'introductthemeion'
  }

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(private storage: Storage) { }
 
  
  public async getTheme(): Promise<themeOptions> {
    const storageItem = await this.storage.get(StorageKey.THEME)
    return storageItem
  }


}