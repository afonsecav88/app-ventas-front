import { Injectable, OnInit } from '@angular/core';
import { Usuario } from '../../Interfaces/usuario';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlUsuarios } from 'src/app/Config/config';
import { Router } from '@angular/router';
import { NotificationsService } from '../services.index';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token: string;
  username: string;
  email: string;

  urlUsuer = `${urlUsuarios}/Usuarios/Register`;
  urlAuthenticate = `${urlUsuarios}/Usuarios/Authenticate`;
  urlUsuerEmail = `${urlUsuarios}/Usuarios/`;

  constructor(private http: HttpClient,
    private notificationsService: NotificationsService, private router: Router) {
    this.cargarLocalStorage();
  }

  estaLogueado(): boolean {
    return (this.token.length > 3) ? true : false;
  };

  cargarLocalStorage(): void {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.username = localStorage.getItem('username');
      this.email = localStorage.getItem('email');
    } else {
      this.token = '';
      this.username = '';
      this.email = '';
    }
  };

  getUsername(): string {
    return localStorage.getItem('email');
  }

  getUser(): string {
    return localStorage.getItem('username');
  }

  getUserToken(): string {
    return localStorage.getItem('token');
  }

  registerUser(usuario: Usuario): Observable<Usuario> {
    const dataUser = usuario;
    const url = this.urlUsuer;
    const headers = this.addHeaders();
    return this.http.post<Usuario>(url, dataUser, { headers }).pipe(
      map((resp: any) => {
        this.notificationsService.registerSuccess(dataUser.email);
        return resp.usuario;
      }),
      catchError(err => {
        this.notificationsService.registerError(`${err.error.mensaje}: 
                    ${dataUser.email}`);
        this.router.navigate(['/register']);
        return throwError(err.error.mensaje);
      })
    );
  };

  loginUser(usuario: Usuario): Observable<Usuario> {
    const dataUser = usuario;
    const url = this.urlAuthenticate;
    const headers = this.addHeaders();
    return this.http.post<Usuario>(url, dataUser, { headers });
  };

  getUserByEmail(email: string): Observable<Usuario> {
    const url = `${this.urlUsuerEmail}/${email}`;
    return this.http.get<Usuario>(url);
  }

  // Metodo de agragar encabezados, implementar en interceptor
  addHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'content-Type': 'application/json'
    });
    return headers;
  }

  logout(): void {
    this.token = '';
    this.username = '';
    this.email = '';
    localStorage.clear();
    this.router.navigate(['/login']);
  }

};
