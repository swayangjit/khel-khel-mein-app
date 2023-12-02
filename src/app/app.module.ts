import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { ThemeService } from './services/theme.service';
import { StorageService } from './services/storage.service';
import { StatusBar } from '@capacitor/status-bar';
import { STATUS_BAR_PLUGIN } from './capacitor-plugins/injection-tokens';

export function translateHttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (translateHttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot({
      name: '__kkm_storage',
      driverOrder: [Drivers.LocalStorage]
    }),
  ],
  providers: [
    { provide: STATUS_BAR_PLUGIN, useValue: StatusBar },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ThemeService,
    StorageService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
