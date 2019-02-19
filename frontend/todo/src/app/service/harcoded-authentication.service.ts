import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
  }
}
