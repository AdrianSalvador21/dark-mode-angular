import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./app.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {SharedModule} from "./modules/shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxSpinnerModule,
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
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        NgxSpinnerService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
