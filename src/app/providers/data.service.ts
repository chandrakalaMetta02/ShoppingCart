import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BaseService } from './Base.service';
import { HttpClient } from '@angular/common/http';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService{

  constructor(protected http: HttpClient) { super(http)}

  /**
   * To get the categories Data
   */
  getCategories(){
    return ['All Categories','Men Accessories','Women Accessories','Children Accessories','Sports Accessories']
  }

  private selectedCategory$=new Subject();

  /**
   * To get the selected category
  */
  getSelectedcategory(){
    return this.selectedCategory$.asObservable();
  }

  /**
   * @param category
   * To set/update the selected category
  */
  setSelectedcategory(category){
    this.selectedCategory$.next(category)
  }

  /**
   * * @param category
   * To get the products based on category data
   */
  getProductsByCategory(category){
    let url="/assets/data/products.json";
    return this._makeRequest(url,null,'GET')
    .pipe(
      map(
        (res:any) => {
          
          if(category == 'All Categories'){
            res.data.forEach(element => {
              element.types=[{label:'+', value:'Add'},{label:1, value:1},{label:'-', value:'Remove'}];
            });
            return res.data;
          }else{
            return res.data.filter(item => {
              item.types=[{label:'+', value:'Add'},{label:1, value:1},{label:'-', value:'Remove'}];
              return item.category == category;
            })
          }
          
        } )
      );
     
  }
  addProductToCart$=new Subject();

  
  /**
   * To get carted products count
   */
  getCartItemsCount(){
    return this.cartedProducts.length;
  }
  cartedProducts=[];

  /**
   * To add product to cart page and store the carted products
   */
  setProductToCart(product){
    this.cartedProducts.push(product);
    this.addProductToCart$.next(product);
    
  }
  /**
   * will be use for ssubscriptions
   */
  getProductToCart(){
    return  this.addProductToCart$.asObservable();
  }

   /**
   * To remove product to cart page and store the carted products
   */
  removeProductFromCart(product){
    this.cartedProducts=this.cartedProducts.filter((item)=>{item.id !== product.id});
  }

   /**
   * To get  carted products 
   */
  getCartedProducts(){
    return this.cartedProducts;
  }

}
