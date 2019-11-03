import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { Product } from '../../providers/base.model';




@Component({
  selector: 'app-contentpanel',
  templateUrl: './contentpanel.component.html',
  styleUrls: ['./contentpanel.component.scss']
})
export class ContentpanelComponent implements OnInit {

  seletedCategory:any;
  productsData:Product[];

  /**
   * 
   * @param dataService Service for the getter/setting methods for the component communication
   * Subscribing the services and configuring the values
   */
  constructor(private dataService:DataService) { 
    this.dataService.getSelectedcategory().
    subscribe((category)=>{
        this.seletedCategory=category;
        this.getProductsByCategory(category);
    },
    (error)=>{
      console.log(error);
    })
  }

  ngOnInit() {}

  /**
   * 
   * @param category category name
   * Invoke this method to get the products based the selection of categories
   */
  getProductsByCategory(category){
    let productsSubscription=this.dataService.getProductsByCategory(category).
      subscribe((products:Product[])=>{
        this.productsData=products;
        console.log(products)
        productsSubscription.unsubscribe();
    },
    (error)=>{
      console.error(error);
      productsSubscription.unsubscribe();
    })
  }

   /**
   * 
   * @param product product
   * Invoke this method to add the product in cart page
   */
  addItemToCart(product){
    this.dataService.setProductToCart(product);
  }
}
