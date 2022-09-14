import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrugSService } from 'src/app/drug-s.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  SupplierDetails:any;
  errorMessage = '';
  constructor(private drugsService: DrugSService) { this.getSupplierlist();}
  getSupplierlist() {
    this.drugsService.getSupplierlist().subscribe(
      (data) => {
        console.log(data);
        this.SupplierDetails = data;
    },
    (err) => {
      console.log(err)
    }
    );
  }

  SupplierToUpdate = {
    supplierId:"",
    supplierName:"",
    email:"",
    availableDrugs:" ",
  }

  register(registerform:NgForm){
    this.drugsService.registerSupplier(registerform.value).subscribe(
      (resp) => {
        console.log(resp);
        registerform.reset();
        this.getSupplierlist();
      },
      (err) => {
        console.log(err)
      }
    );
  }

  
     
  edit(supplier:any){
  this.SupplierToUpdate=supplier;
  console.log(this.SupplierToUpdate);
  }

  

  ngOnInit(): void {
  }

  



}
