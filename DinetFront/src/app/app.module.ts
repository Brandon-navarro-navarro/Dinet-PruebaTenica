import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';

import alocaleESPE from "@angular/common/locales/es-PE";
import {registerLocaleData} from '@angular/common';
registerLocaleData(alocaleESPE);


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideHttpClient(),
    {
      provide: LOCALE_ID, useValue: "es-PE"
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
