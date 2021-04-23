import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = true;
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(environment.api_url + '/login', data);
  }

}
