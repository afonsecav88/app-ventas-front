import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones de Modulos para formularios
import { RouterModule } from '@angular/router';

// Importación de  los componentes
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SpinnerComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
