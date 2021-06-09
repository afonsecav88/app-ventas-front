import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Importaciones de Modulos para formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importacion de componentes
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],

  exports:[
    RegisterComponent,
    LoginComponent,
    UserComponent
  ]

})
export class UsersModule { }
