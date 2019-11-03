import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  cartedProducts:any=[];

  /**
   * 
   * @param dataService Service for the getter/setting methods for the component communication
   * Subscribing the services and configuring the values
   */
  constructor(private dataService:DataService) {
    this.cartedProducts=this.dataService.getCartedProducts();
  }
  
  ngOnInit() {}

  /**
   * Invok this method to clear cart
   */
  clearCartDeatils(){
    this.dataService.clearCartDetails();
  }
  /**
   * Call this method to shoe checkout products
   */
  checkoutProducts(){
    this.clearCartDeatils();
    alert("Placed Order successfully with "+Math.floor(Math.random() * Math.floor(3)));
    
  }
  /**
   * Call this method while changing the no of itemms count for the products
   */
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

  /**
   * Call this method to the types to show as split button labels
   */
  getTypes(product){
    return product.types? product.types :[];
  }
}
