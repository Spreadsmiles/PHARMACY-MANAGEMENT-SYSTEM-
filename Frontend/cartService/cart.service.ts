import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { Cart } from 'src/app/cart';
import { TokenStorageService } from 'src/app/token-storage.service';
import { Order } from 'src/app/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentUsers: any;
  result:any = [];
  abc: any = [];
  data: any=[]

  

  DELETE_CART = 'http://localhost:7000/drugs/cart/'



  CART_URL = 'http://localhost:5004/drugs/cart/'

  CART_GET_URL = 'http://localhost:7000/drugs/cart/username/'

  ORDER_URL = 'http://localhost:8080/user/post/'

  PAYMENT_URL = 'http://localhost:8080/submitPaymentDetail/'

  constructor(
    private _http: HttpClient,
    private token: TokenStorageService
    ) { }

  postCart(cart: Cart){
    return this._http.post<any>(this.CART_URL, cart);
  }

  getCartDetails(username:any){
    return this._http.get(this.CART_GET_URL+username);
  }

  postOrder(order:Order){
    return this._http.post<any>(this.ORDER_URL,order);
  }

  updateCart(cart:any, cartId:string){
    return this._http.put(this.CART_URL+ cartId, cart);
  }

  pay(orderId:string){
    return this._http.get(this.PAYMENT_URL+orderId);
  }
  deleteByUsername(username:string){
    return this._http.delete(this.DELETE_CART+username);
  }


  
  // setLocalStorage(data: any){
  //   // return lsessionS.setItem('cart', JSON.stringify(data));
  //   return .setItem('name', JSON.stringify(data));
  // }

  // getLocalStorage(){
  //   this.abc = sessionStorage.getItem('name');
  //   this.result = JSON.parse(this.abc);
  //   return this.result;
  // }


}
