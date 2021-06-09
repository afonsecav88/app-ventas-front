import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



// Importaciones para los servicios
import { UsersService,ArticlesService,
         LoginGuardGuard,
         NotificationsService,
         SpinnerService } from './services.index';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),



  ],
  providers:[
    UsersService,
    ArticlesService,
    LoginGuardGuard,
    NotificationsService,
    SpinnerService
  ],
exports:[

]

})
export class ServicesModule { }
