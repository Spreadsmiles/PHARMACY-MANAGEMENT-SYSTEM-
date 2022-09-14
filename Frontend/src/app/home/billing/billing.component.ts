import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DrugSService } from 'src/app/drug-s.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  checkoutForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    contactNo: new FormControl("",[Validators.required]),
    pincode: new FormControl("",[Validators.required]),
    address: new FormControl("",[Validators.required]),
    
  })
  

  constructor(private drugSService: DrugSService) { }

  ngOnInit(): void {
  }

  

  

}
