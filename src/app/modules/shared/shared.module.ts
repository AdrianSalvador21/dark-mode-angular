import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {TranslateModule} from "@ngx-translate/core";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    TranslateModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatBottomSheetModule
  ],
  exports: [
    HeaderComponent,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatBottomSheetModule
  ],
  entryComponents: [],
  providers: [],
})

export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }
}
