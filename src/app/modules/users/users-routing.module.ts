import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListPageComponent} from "./pages/user-list-page/user-list-page.component";

const routes: Routes = [
  { path: '', component: UserListPageComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
