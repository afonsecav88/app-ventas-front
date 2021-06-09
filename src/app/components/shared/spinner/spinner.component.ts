import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../services/services.index';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent  {

  isLoadding = this.spinnerService.isLoadding;
  constructor( private spinnerService: SpinnerService  ) { }

}
