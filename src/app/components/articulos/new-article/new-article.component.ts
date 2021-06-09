import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Articulo } from '../../../Interfaces/articulo';
import { ArticlesService, NotificationsService } from '../../../services/services.index';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  articleForm: FormGroup;

  articulo = {
    nombre: '',
    descripcion: '',
    precio: null,
    imagen: null,
    contactoPropietario: '',
    telefonoPropietario: null,
    usuarioId: null,
  };

  constructor(private articleService: ArticlesService,
    private router: Router,
    private notificationsService: NotificationsService) {

  }

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      contactoPropietario: new FormControl(this.getUserEmail(), [Validators.required, Validators.email]),
      telefonoPropietario: new FormControl('', [Validators.required]),
      usuarioId: new FormControl(this.getUserId(), [Validators.required])
    });

  }

  addArticle(): void {
    this.fullField();
    const article = new FormData();
    article.append('nombre', this.articulo.nombre);
    article.append('descripcion', this.articulo.descripcion);
    article.append('precio', this.articulo.precio);
    article.append('imagen', this.articulo.imagen);
    article.append('contactoPropietario', this.articulo.contactoPropietario);
    article.append('telefonoPropietario', this.articulo.telefonoPropietario);
    article.append('usuarioId', this.articulo.usuarioId);
    this.articleService.addArticle(article).subscribe();
    this.cleanField();
    this.notificationsService.addArticleSuccess();
    }

  getImage(event) {
    this.articulo.imagen = event.target.files[0] as File;

  }

  fullField(): Articulo {
    this.articulo.nombre = this.articleForm.value.nombre;
    this.articulo.descripcion = this.articleForm.value.descripcion;
    this.articulo.precio = this.articleForm.value.precio;
    this.articulo.contactoPropietario = this.articleForm.value.contactoPropietario;
    this.articulo.telefonoPropietario = this.articleForm.value.telefonoPropietario;
    this.articulo.usuarioId = this.articleForm.value.usuarioId;
    return this.articulo;
  }

  cleanField(): void {
    this.articleForm.setValue({
      nombre: '',
      descripcion: '',
      precio: null,
      imagen: null,
      contactoPropietario: '',
      telefonoPropietario: null,
      usuarioId: null,
    });
  }

  getUserId(): string {
    return localStorage.getItem('id');
  }

  getUserEmail(): string {
    return localStorage.getItem('email');
  }



}
