import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { urlArticulos, urlImages } from 'src/app/Config/config';
import { Articulo } from '../../Interfaces/articulo';
import { NotificationsService, UsersService } from '../services.index';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {

  urlArt = `${urlArticulos}/ventas`;
  urlImg = `${urlImages}/Images/Articulos/`;


  constructor(private http: HttpClient,
    private usersService: UsersService,
    private notificationsService: NotificationsService) {
  }

  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.urlArt).pipe(
      catchError(err => throwError(err.error.mensaje))
    );
  }

  getArticlesUser(email: string): Observable<Articulo[]> {
    //email = this.usersService.getUsername();
    const url = `${this.urlArt}/findemail/${email}`;
    return this.http.get<Articulo[]>(url);
  }
  obtenerImagen(artImagen: string): string {
    const arr: string[] = artImagen.split('\\');
    const result = arr.pop();
    return `${this.urlImg + result}`;
  }

  getImagen(artImagen: string): string {
    return this.obtenerImagen(artImagen);
  }

  getArticuloById(id: number): Observable<Articulo> {
    const url = `${this.urlArt}/${id}`;
    return this.http.get<Articulo>(url);
  }

  addArticle(article: any): Observable<any> {
    const newArticle = article;
    // const headers = this.addHeaders();
    const url = this.urlArt;
    return this.http.post<any>(url, newArticle);
    // .pipe(
    //   map((resp: any) => {
    //     this.notificationsService.addArticleSuccess();
    //     return resp.article;
    //   }),
    //   catchError(() => throwError('Error al insertar el Artículo')));
  }

  deleteArticle(id: number): Observable<Articulo> {
    const url = `${this.urlArt}/${id}`;
    return this.http.delete<Articulo>(url);
  }

  // Metodo de agragar encabezados, implementar en interceptor
  addHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'content-Type': 'multipart/form-data'
    });
    return headers;
  }

}
