import { Component, OnInit } from '@angular/core';
import { ArticlesService, NotificationsService, UsersService } from '../../../services/services.index';
import { Articulo } from '../../../Interfaces/articulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isLoadding = false;
  articulos: Articulo[] = [];

  constructor(private articlesService: ArticlesService,
    private usersService: UsersService,
    private router: Router,
    private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    const email = this.usersService.getUsername();
    this.articlesService.getArticlesUser(email).subscribe(data => {
      this.articulos = data;
      console.log(this.articulos);
    });
  }
  // navegando hacia el articulo (ver mas...)
  editArticle(id: number): void {
    this.router.navigate(['/edit', `${id}`]);
  }

  deleteArticle(id: number): void {
    this.alertaBorrado();
    this.articlesService.deleteArticle(id).subscribe();
    this.router.navigate(['/user', this.usersService.getUser()]).then(() => { window.location.reload(); });
  }

   // metodo para prevvenir el borrado de una tarea
   alertaBorrado(): void {

    }

}
