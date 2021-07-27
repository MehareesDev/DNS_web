import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
              private _router: Router) {
  }

  canActivate() {
    console.log("AlwaysAuthGuard");
    if (localStorage.getItem('user_data')) {
      return true
    } else {
      this._router.navigate(['/']);
    }
  }
}
