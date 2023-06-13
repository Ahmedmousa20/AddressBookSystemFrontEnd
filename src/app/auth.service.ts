import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  signUp(registerData: any):Observable<any>
  {
    return this._http.post("https://localhost:5001/Api/Account/register", registerData);
  }

  signIn(loginData:any):Observable<any>
  {
    return this._http.post("https://localhost:5001/Api/Account/login", loginData);
  }
}
