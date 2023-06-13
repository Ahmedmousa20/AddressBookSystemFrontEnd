import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _Router:Router) { }

  canActivate(): boolean | Observable<boolean> 
  {
    let token = localStorage.getItem("token")
    if(token){
      return true;
    }

    this._Router.navigateByUrl("/login");
    return false;
  }
}
