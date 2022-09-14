import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrugSService } from 'src/app/drug-s.service';
import { Order } from 'src/app/order';
import { TokenStorageService } from 'src/app/token-storage.service';
import Swal from 'sweetalert2';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  title='AdminDashboard';
  public show:boolean = false;
  public shows:boolean = false;
  public sp:boolean = false;
  public order1:boolean = false;
  public sp1:boolean = false;
  public buttonName:any = 'Drugs';
  public ButtonName:any = 'Supplier';

  isLoggedIn = false;
  private roles: string[] = [];
  showUserBoard = false;
  showAdminBoard = false;
  username?: string;

  DrugsToUpdate = {
    drugsId:"",
    drugsName:"",
    drugsCost:"",
    stockQty:" ",
    drugsDescription:" ",
    supplierName:" ",
  }

  displayStyle = "none";
  content: any;
  currentUser: any;
  oderlist: any[]=[];
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  
 
  DrugsDetails: any ;
  constructor(private drugsService: DrugSService, private user: UserServiceService, private token: TokenStorageService) {
    this.getDrugslist();
   }
  register(registerform:NgForm){
    this.drugsService.registerDrugs(registerform.value).subscribe(
      (resp) => {
        console.log(resp);
        registerform.reset();
        this.getDrugslist();
        
        Swal.fire("drug added");

      },
      
      (err) => {
        console.log(err)
      }
    
    );

  }

  getDrugslist(){
    this.drugsService.getDrugslist().subscribe(
      (resp) => {
        console.log(resp);
        this.DrugsDetails=resp;
       
      },
      (err) => {
        console.log(err);
      }
    );
  }

  
  
  
  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();

    if(this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }

    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
    

    // this.user.getAdminDashBoard().subscribe((user) => {
    //   this.content = user;
    // },
    // err=>{
    //   this.content = JSON.stringify(err.message);
    // }
    // )


  }

  showorder(){
    this.order1=!this.order1;
  }

  showDruglist(){
    
    this.sp = !this.sp;
    if(this.shows){
      
    }
    else{
      
    }
   
  }

  showSupplierlist(){
    this.sp1 = !this.sp1;
    if(this.shows){
      
    }
    else{
     
    }
     
  }

  showDrugs(){
    this.show = !this.show;
    if(this.shows){
      
    }
    else{
      
    }
    
  }

  showSupplier(){
    this.shows = !this.shows;
    if(this.shows){
      
    }
    else{
      
    }

}
getoderlist(){
  this.drugsService.getoder("pending").subscribe(
    (resp) => {
      console.log(resp);
      this.oderlist.push(resp);
      window.location.reload();
    },
    (err) => {
      console.log(err);
    }
  );
}
}
