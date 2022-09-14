import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrugSService } from 'src/app/drug-s.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Drugs';

  DrugsToUpdate = {
    drugsId:"",
    drugsName:"",
    drugsCost:"",
    stockQty:" ",
    drugsDescription:" ",
    supplierName:" ",
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  
 
  DrugsDetails: any ;
  constructor(private drugsService: DrugSService) {
    this.getDrugslist();
   }
  register(registerform:NgForm){
    this.drugsService.registerDrugs(registerform.value).subscribe(
      (resp) => {
        console.log(resp);
        registerform.reset();
        this.getDrugslist();
       
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

  deleteDrugs(drug: { drugsId:any}){
    this.drugsService.deleteDrugs(drug.drugsId).subscribe(
      (resp) => {
        console.log(resp);
        this.getDrugslist();
        window.location.reload();
      },
      (err) => console.log(err)
    );
   
  }
     
  deleteDrugs1(drug: { drugsId:any}){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteDrugs(drug);
       
        Swal.fire(
      
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }
  edit(drug:any){
  this.DrugsToUpdate=drug;
  console.log(this.DrugsToUpdate);
  }
  
  

  ngOnInit(): void {
  }

  showDrugs(){
    this.show = !this.show;
    if(this.show){
      this.buttonName = "Hide Drugs";
    }
    else{
      this.buttonName = "Drugs";
    }
  }

}
