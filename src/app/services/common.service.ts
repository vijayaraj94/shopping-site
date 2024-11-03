import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  cartData = new BehaviorSubject<any>([]);
  currentQuote = this.cartData.asObservable();

  constructor() { }

  setCartValues(value: string){
    this.cartData.next(value);
  }



}
