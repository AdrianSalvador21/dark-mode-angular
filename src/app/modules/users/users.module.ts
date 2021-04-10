import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import {SharedModule} from "../shared/shared.module";
import {UsersRoutingModule} from "./users-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {UserDetailDialogComponent} from "./components/user-detail-dialog/user-detail-dialog.component";
import {UserDetailBottonsheetComponent} from "./components/user-detail-bottonsheet/user-detail-bottonsheet.component";
import {ThemeModule} from "../theme/theme.module";
import {lightTheme} from "../theme/light-theme";
import {darkTheme} from "../theme/dark-theme";
@NgModule({
  declarations: [
    UserListPageComponent,
    UserDetailDialogComponent,
    UserDetailBottonsheetComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    UsersRoutingModule,
    MatIconModule,
    MatInputModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark'
    }),
  ],
  exports: [
  ],
  entryComponents: [
    UserDetailDialogComponent,
    UserDetailBottonsheetComponent
  ],
  providers: [],
})

export class UsersModule {
  static forRoot() {
    return {
      ngModule: UsersModule,
    };
  }
}
