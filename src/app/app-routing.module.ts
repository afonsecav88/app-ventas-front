
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticuloComponent } from './components/articulos/details/articulo.component';
import { LoginComponent } from './components/users/login/login.component';
import { NewArticleComponent } from './components/articulos/new-article/new-article.component';
import { RegisterComponent } from './components/users/register/register.component';
import { UserComponent } from './components/users/user/user.component';
import { LoginGuardGuard } from './services/services.index';
import { AboutComponent } from './components/about/about.component';
import { EditComponent } from './components/articulos/edit/edit.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'newArticle', component: NewArticleComponent, canActivate: [LoginGuardGuard] },
  { path: 'articulo/:id', component: ArticuloComponent, canActivate: [LoginGuardGuard] },
  { path: 'user/:id', component: UserComponent, canActivate: [LoginGuardGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [LoginGuardGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

