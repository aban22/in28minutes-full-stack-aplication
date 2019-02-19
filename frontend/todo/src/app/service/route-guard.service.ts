import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HarcodedAuthenticationService } from './harcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private harcodedAuthenticationService: HarcodedAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.harcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
