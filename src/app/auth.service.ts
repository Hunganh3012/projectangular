import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthrized=false;
  constructor() { }
  logIn(){this.isAuthrized=true};
  logOut(){this.isAuthrized=false};
}
