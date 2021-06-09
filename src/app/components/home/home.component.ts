import { Component, OnInit } from '@angular/core';
import { ArticlesService} from '../../services/services.index';
import { Articulo } from '../../Interfaces/articulo';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoadding = false;
  articulos: Articulo[] = [];

  constructor(private articlesService: ArticlesService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.articlesService.getArticulos()
      .subscribe((data: Articulo[]) => {
        this.articulos = data;
      }, err => {
        if (!err) {
          this.isLoadding = true;}
      });
  }


  // navegando hacia el articulo (ver mas...)
  verDetalles(id: number): void {
    this.router.navigate(['/articulo', `${id}`]);
  }
}

