import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoadding = new Subject<boolean>();
  constructor() { }

  showSpinner(): void {
    this.isLoadding.next(true);
  }

  hideSpinner(): void {
    this.isLoadding.next(false);
  }

}
