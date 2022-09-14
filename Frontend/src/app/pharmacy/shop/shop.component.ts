import { Component, OnInit } from '@angular/core';
import { CartService } from 'cartService/cart.service';
import { Cart } from 'src/app/cart';
import { DrugsService } from 'src/app/drugs.service';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  content: any;
  isLoggedIn = false;
  roles: any;
  username: any;
  showAdminBoard: any;
  showUserBoard: any;
  addToCarts = false;
  currentUser: any;
  cartId: any;

  constructor(private drugsService: DrugsService,private tokenStorageService: TokenStorageService, private cartService: CartService,) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
    this.currentUser = this.tokenStorageService.getUser().username;
    console.log(this.currentUser);



    this.drugsService.getDrugs().subscribe((result: any)=>{
      console.warn('drugs',result);
      this.content = result;
      // console.log(this.content.drugsName);
    });

    // this.drugsService.getDrugsByCategory(categories).
  }

  genUniqueId(): string {
    const dateStr = Date
      .now()
      .toString(36); // convert num to base 36 and stringify
  
    const randomStr = Math
      .random()
      .toString(36)
      .substring(2, 8); // start at index 2 to skip decimal point
  
    return `${dateStr}-${randomStr}`;
  }


  addToCart(item: any){
    this.addToCarts = true;
    this.cartId = this.genUniqueId();
    

    // this.username = this.currentUser.username;
    // console.log(username);
    // console.log(currentUser);

    // this.item.push(this.currentUser);
    // this.cartService.postCart(item).subscribe((out)=>{
    //   console.warn('cart',out);
    //   console.log(item);
    // })
    

  // console.warn('drugs',item,this.currentUser);



  // this.xyz.push(item);
  // console.log(this.xyz);

  // this.abc = localStorage.getItem('cart-items');

  // this.result  = JSON.parse(this.abc);
  const h = 1;
  let user = new Cart(this.cartId,this.currentUser,item.drugsId,item.drugsName,item.drugsCost,h, item.drugsQty,item.drugsDescription, item.total);
  this.cartService.postCart(user).subscribe((out)=>{
    console.log('cart',out);
  })

  // this.cartService.setLocalStorage(this.currentUser);
  // console.log(this.cartService);
  

  
}

}
