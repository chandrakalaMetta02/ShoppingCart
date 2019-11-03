import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartedProducts:any=[];
  constructor(private dataService:DataService) {
    this.cartedProducts=this.dataService.getCartedProducts();
  }
  
  ngOnInit() {
  }
  checkoutProducts(){
    alert("Placed Order successfully");
    
  }
  changeCartedValue(e,product){
    console.log(e)
    if(!product.count){
      product.count = 1;
    }
    if(e.value == 'Add'){
      product.count++;
    }else{
      if(product.count)
      product.count--;
    }
    product.types[1]={label:product.count.toString(),value:product.count.toString()};
  }
  getTypes(product){
    return product.types? product.types :[];
  }
}
