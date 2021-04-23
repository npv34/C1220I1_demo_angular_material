import {Injectable} from '@angular/core';
import {IUser} from "../core/IUser";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

let headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': "Bearer " + localStorage.getItem('token')
});
const httpOptions = {
  headers: headers_object
};

@Injectable({
  providedIn: 'root'
})


export class UserService {

  users = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {

    return this.http.get<any>(environment.api_url + '/users', httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(environment.api_url + '/users/' + id, httpOptions)
  }

}
