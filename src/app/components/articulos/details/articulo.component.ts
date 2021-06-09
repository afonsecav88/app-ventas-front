import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/Interfaces/articulo';
import { ArticlesService } from '../../../services/services.index';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  id: number;

  articulo: Articulo = {
    id: null,
    nombre: '',
    descripcion: '',
    precio: null,
    imagenPath: '',
    contactoPropietario: '',
    telefonoPropietario: null,
    imagen: null,
    usuarioId: null,
    usuario: null
  };

  constructor(private articlesService: ArticlesService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
    this.articlesService.getArticuloById(this.id).subscribe(data => {
      this.articulo = data;
    });

  }
  getImagen(_artImagen: string): string {
    return this.articlesService.obtenerImagen(this.articulo.imagenPath);
  }


}
