import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importacion de componentes
import { ArticuloComponent } from './articulos/details/articulo.component';
import { EditComponent } from './articulos/edit/edit.component';
import { HomeComponent } from '../components/home/home.component';
import { NewArticleComponent } from './articulos/new-article/new-article.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//Importación  de Modulo
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';


// Importaciones de Modulos para formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticuloComponent,
    EditComponent,
    HomeComponent,
    NewArticleComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
