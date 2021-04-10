import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./modules/shared/shared.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./app.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import { ServiceWorkerModule } from '@angular/service-worker';
import {ThemeModule} from "./modules/theme/theme.module";
import {lightTheme} from "./modules/theme/light-theme";
import {darkTheme} from "./modules/theme/dark-theme";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    SharedModule.forRoot(),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    NgxSpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
