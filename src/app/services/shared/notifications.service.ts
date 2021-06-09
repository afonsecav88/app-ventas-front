import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class NotificationsService {

   constructor(private toastrService: ToastrService) {

  }
// Notificaciones para el manejo de usuarios

  loginWarnig() {
    this.toastrService.warning('Debes estar logueado', 'Por favor');
  }

  registerSuccess(user: string) {
    this.toastrService.success('Registrado correctamente', `Usuario ${user}`);
  }

  welcomeUser(user: string) {
    this.toastrService.success(user, 'Bienvenid@');
  }

// Notificaciones para el Manejo de Errores de usuarios
registerError(error: string) {
  this.toastrService.error(` ${error}`);
}

loginError(error: string) {
  this.toastrService.error( `${error}`, 'Error !!!');
}

// Notificaciones para el manejo de articulos
addArticleSuccess() {
  this.toastrService.success('Articulo insertado correctamente', 'OK !!!!');
}

editArticleSuccess() {
  this.toastrService.success('Editado editado correctamente', 'OK !!!!');
}

// Notificaciones para el Manejo de Errores de usuarios

addArticleError(error: string) {
  this.toastrService.error( `${error}`, 'Error !!!');
}

// creando notificación para prevenir eliminación



}

