import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationsService, UsersService } from '../../../services/services.index';
import { Usuario } from '../../../Interfaces/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  user: Usuario = {
    email: '',
    password: ''
  };

  constructor(private usuariosService: UsersService,
    private notificationsService: NotificationsService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  login(): void {
    this.user.email = this.loginFormGroup.value.email;
    this.user.password = this.loginFormGroup.value.password;
    this.usuariosService.loginUser(this.user).subscribe(data => {
      localStorage.setItem('id', `${data.id}`);
      localStorage.setItem('username', data.username);
      localStorage.setItem('email', data.email);
      localStorage.setItem('token', data.token);
      this.usuariosService.cargarLocalStorage();
      this.router.navigate(['/user', `${data.username}`]);
      this.notificationsService.welcomeUser(`${data.email}`);
    }, (err => {
    this.notificationsService.loginError(err.error.mensaje);
    }));
  };
}
