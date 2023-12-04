import { Component } from '@angular/core';
import { StatusBar, StatusBarStyle, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly platform: Platform,
    private readonly translateService: TranslateService,
    private readonly themeService: ThemeService,
    private readonly storageService: StorageService
  ) {
    this.initializeApp().catch()
  }
  async ngOnInit(){
    
  }

  public async initializeApp(): Promise<void> {
    await Promise.all([this.initializeTranslations(), this.platform.ready()])
    await this.storageService.initialize()
    this.themeService.register()
  }

  private async initializeTranslations(): Promise<void> {
    this.translateService.setDefaultLang("en")
  }

}
