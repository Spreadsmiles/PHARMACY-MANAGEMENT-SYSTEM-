import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'cartService/cart.service';
import { DrugsService } from '../drugs.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  itemList: any;
  k:any;
  @ViewChild("par") par: ElementRef | undefined;

  constructor(private drugsService: DrugsService) { }

  ngOnInit(): void {

    this.drugsService.getDrugs().subscribe((result)=>{
      console.warn('drugs',result);
      this.itemList = result;
    });
  }

  Geeks() {
    console.log(this.par)
    var input = document.getElementsByName('array[]');

    for (var i = 0; i < input.length; i++) {
      var a = input[i];
      // this.k = this.k + "array[" + i + "].value= "
      //         + a.value + " ";
      console.log(a);
    }
  }

}
