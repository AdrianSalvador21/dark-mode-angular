import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListPageComponent } from './user-list-page.component';
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {UsersRoutingModule} from "../../users-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

describe('UserListPageComponent', () => {
  let component: UserListPageComponent;
  let fixture: ComponentFixture<UserListPageComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListPageComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        SharedModule,
        UsersRoutingModule,
        MatIconModule,
        MatInputModule,
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
      ],
      providers: [
        NgxSpinnerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
