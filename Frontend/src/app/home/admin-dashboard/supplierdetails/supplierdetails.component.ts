import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrugSService } from 'src/app/drug-s.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplierdetails',
  templateUrl: './supplierdetails.component.html',
  styleUrls: ['./supplierdetails.component.scss']
})
export class SupplierdetailsComponent implements OnInit {

  SupplierDetails:any;

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

  deleteDrugs(supplier: { supplierId:any}){
    this.drugsService.deleteSupplier(supplier.supplierId).subscribe(
      (resp) => {
        console.log(resp);
        this.getSupplierlist();
      },
      (err) => console.log(err)
    );
    window.location.reload();
  }
  deletesupplier1(supplier: { supplierId:any}){
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
        this.deleteDrugs(supplier);
        Swal.fire(
      
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }
     
 


  
  
  edit(supplier:any){
    this.SupplierToUpdate=supplier;
    console.log(this.SupplierToUpdate);
    }
  
    updateDrugs(updatedForm:NgForm){
      const supplierID = this.SupplierToUpdate.supplierId
      this.drugsService.updateSupplier(updatedForm.value, supplierID).subscribe(
        (resp)=> {
          console.log(resp);
          
        },
        (err) =>{
          console.log(err);
        }
      );
    }
  ngOnInit(): void {
  }



}
