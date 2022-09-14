import { Component, OnInit } from '@angular/core';
import { CartService } from 'cartService/cart.service';
import { Cart } from 'src/app/cart';
import { Order } from 'src/app/order';
import { TokenStorageService } from 'src/app/token-storage.service';


@Component({
  selector: 'app-odersummary',
  templateUrl: './odersummary.component.html',
  styleUrls: ['./odersummary.component.scss']
})
export class OdersummaryComponent implements OnInit {
  
  CartService: any;
  currentUser: any;
  cartList: any=[];
  amount:number = 0;
  orderId: any;
 

  constructor( private cartService: CartService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  
    this.currentUser = this.tokenStorageService.getUser().username;
    console.log(this.currentUser);
    this.cartService.getCartDetails(this.currentUser).subscribe((data: any) => {
      console.log(data);
      this.cartList = data;
      
      console.log(this.cartList);

    })
  
}  genUniqueId(): string {
  const dateStr = Date
    .now()
    .toString(36); // convert num to base 36 and stringify

  const randomStr = Math
    .random()
    .toString(36)
    .substring(2, 8); // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`;
}

addToOrder(cartList: Cart[]){
  this.orderId = this.genUniqueId();
  console.log(cartList);
  // this.amount = this.cartList.drugsCost;
  for(let i = 0; i < cartList.length; i++){
    this.amount += cartList[i].total;
    console.log(this.amount);
  }
  console.log(this.amount);

  const order = new Order(this.orderId,this.currentUser,this.cartList,"pending",this.amount);
  console.log(order);
  this.cartService.postOrder(order).subscribe((data) => {
    console.log(data);
  })


  this.cartService.pay(this.orderId);
  // {this.route.navigateByUrl('http://localhost:8080/submitPaymentDetail'+this.orderId);}
  window.location.href=`http://localhost:8080/submitPaymentDetail/${this.orderId}`;

}

}