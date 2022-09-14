import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'cartService/cart.service';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { Observable, switchAll } from 'rxjs';
import Swal from 'sweetalert2';
import { Cart } from '../cart';
import { DrugsService } from '../drugs.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content:any;
  data:any;
  itemList = [];
  isLoggedIn = false;
  private roles: string[] = [];
  showUserBoard = false;
  showAdminBoard = false;
  addToCarts = false;
  username?: string;
  item: any = [];
  xyz:any = [];
  currentUser: any;
  searchText:any;
  getValues:any = null;
  abc:any = [];
  result: any = [];
  cartId: any;
  cartLists: any;

  

  constructor(
    private tokenStorageService: TokenStorageService,
    private drugsService: DrugsService,
    private cartService: CartService,
    
    ) { } 

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



    

    this.drugsService.getDrugs().subscribe((result)=>{
      console.warn('drugs',result);
      this.content = result;
      // console.log(this.content.drugsName);
    });
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

  addnotcart(){
    Swal.fire("please login to place order!");
  }

    addToCart(item: any){
      this.cartId = this.genUniqueId();
      const h = 1;
      let user = new Cart(this.cartId, this.currentUser,item.drugsId,item.drugsName,item.drugsCost,h,item.stockQty,item.drugsDescription,item.drugsCost);
      // this.addToCarts = true;
      console.log(item);    
      this.cartService.getCartDetails(this.currentUser).subscribe((data:any)=>{console.log(data); 
      this.cartLists=data;
      if(this.cartLists.length<1){
        this.cartService.postCart(user).subscribe((out)=>{console.log('cart',out);});
        Swal.fire("Item Added!");}
        else{
          for(let i in this.cartLists){
            if(user.drugsId!=this.cartLists[i]['drugsId']) {
            this.cartService.postCart(user).subscribe((out)=>{console.log('cart',out);});
            Swal.fire("Item Added!");
             
          } else{
          
            Swal.fire("Already Added!");
        }}

      }



      

      })
   
    

    // this.cartService.setLocalStorage(this.currentUser);
    // console.log(this.cartService);
    }

    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 6
        },
        940: {
          items: 1      }
      },
      nav: true
    }
     
      slides = [
        {id: "1", img: "https://dummyimage.com/350x250/423b42/fff"},
        {id: "2", img: "https://dummyimage.com/350x250/2a2b7a/fff"},
        {id: "3", img: "https://dummyimage.com/350x250/1a2b7a/fff"},
        {id: "4", img: "https://dummyimage.com/350x250/7a2b7a/fff"},
        {id: "5", img: "https://dummyimage.com/350x250/9a2b7a/fff"},
        {id: "6", img: "https://dummyimage.com/350x250/5a2b7a/fff"},
        {id: "6", img: "https://dummyimage.com/350x250/5a2b7a/fff"}
      ];



  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

// console.warn('drugs',item,this.currentUser);



    // this.xyz.push(item);
    // console.log(this.xyz);

    // this.abc = localStorage.getItem('cart-items');

    // this.result  = JSON.parse(this.abc);
     // this.username = this.currentUser.username;
      // console.log(username);
      // console.log(currentUser);

      // this.item.push(this.currentUser);
      // this.cartService.postCart(item).subscribe((out)=>{
      //   console.warn('cart',out);
      //   console.log(item);
      // })


}


