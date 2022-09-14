import { Component, OnInit } from '@angular/core';
import { DrugSService } from 'src/app/drug-s.service';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  oderlist: any;
  x:any[]=[];
  d:any;
  
  

  constructor(private drugsService: DrugSService) { this.getoderlist()}
  DrugsToUpdate = {
   
    status:""
  }

  ngOnInit(): void {
  }
  getoderlist(){
    this.drugsService.getoder("pending").subscribe(
      (resp) => {
        console.log(resp);
        this.d=resp;
       
        //console.log("hi",this.x);

      },
      (err) => {
        console.log(err);
      }
    );
  }
  accept(){

  }

  updateoder(orderId:string,userId:string,cart:[], total:number){
    const x=new Order(orderId,userId,cart,"confirmed",total)
    this.drugsService.updateoder(x,orderId).subscribe(
      (resp)=> {
        console.log(resp);
        
        
      },
      (err) =>{
        console.log(err);
      }
    );
  }
  edit(drug:any){
    this.DrugsToUpdate=drug;
    console.log(this.DrugsToUpdate);
    }
}
