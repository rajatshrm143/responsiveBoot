import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class GuardMeGuard implements CanActivate {

  constructor(private route: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('userEmail') != '' || sessionStorage.getItem('userEmail') != '') {
      return true;
    }
    else if (localStorage.getItem('userEmail') != '' || sessionStorage.getItem('userEmail') != '') {
      return true;
    }
    else {
      this.route.navigate(['/login']);
      return false;
    }

  }

}
