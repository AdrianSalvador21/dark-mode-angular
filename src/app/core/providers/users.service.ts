import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {NgxSpinnerService} from "ngx-spinner";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class UsersService {
  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
  }

  getAllUsers(): any {
    this.spinner.show();
    return this.http.get<any>(`${this.apiUrl}/users`).pipe(
      map((response) => {
        this.spinner.hide();
        return response;
      }));
  }

  createUser(user): any {
    this.spinner.show();
    return this.http.post<any>(`${this.apiUrl}/users`, {
      name: user.name,
      email: user.email
    }).pipe(
      map((response) => {
        this.spinner.hide();
        return response;
      }));
  }

  updateUser(user): any {
    this.spinner.show();
    return this.http.patch<any>(`${this.apiUrl}/users/${user.id}`, {
      name: user.name,
      email: user.email
    }).pipe(
      map((response) => {
        this.spinner.hide();
        return response;
      }));
  }

  deleteUser(userId): any {
    this.spinner.show();
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`).pipe(
      map((response) => {
        this.spinner.hide();
        return response;
      }));
  }

}
