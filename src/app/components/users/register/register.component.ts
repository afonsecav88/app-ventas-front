import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService, NotificationsService } from '../../../services/services.index';
import { Usuario } from '../../../Interfaces/usuario';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
   usuario: Usuario = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private usersService: UsersService,
    private notificationsService: NotificationsService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password2: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }, { validators: this.passwordIqual() });
  }

  registerUsers(): void {
    this.fullField();
    this.usersService.registerUser(this.usuario).subscribe();
    this.cleanField();
    this.router.navigate(['/login']);
  }

  // Funcion validadora de que los password sean  iguales
  passwordIqual() {
    return (form: FormGroup) => {
      const pass1 = form.controls.password.value;
      const pass2 = form.controls.password2.value;
      if (pass1 === pass2) {
        return null;
      }
      return { passwordIqual: true };
    };
  }
  emailIqual(): void {
    const email = this.registerForm.controls.email.value;
    this.usersService.getUserByEmail(email).subscribe();
  };


  cleanField(): void {
    this.registerForm.setValue({
      username: '',
      email: '',
      password: '',
      password2: '',
    });
  }

  fullField() {
    this.usuario.username = this.registerForm.value.username;
    this.usuario.email = this.registerForm.value.email;
    this.usuario.password = this.registerForm.value.password;
  };
}

