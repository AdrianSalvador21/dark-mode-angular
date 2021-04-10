import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";

describe('HeaderComponent', () => {
  let component: HeaderComponent = new HeaderComponent(null);

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
