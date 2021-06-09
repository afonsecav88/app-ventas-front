import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NotificationsService } from '../shared/notifications.service';
import { UsersService } from '../shared/users.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private userservice: UsersService, private notificationsService: NotificationsService, private router: Router) { }

  canActivate(): boolean {
    if (this.userservice.estaLogueado()) {
      return true;
    } else {
      this.notificationsService.loginWarnig();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
