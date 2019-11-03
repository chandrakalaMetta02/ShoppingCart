import { Component } from '@angular/core';
import { DataService } from './providers/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  count:number=0;

   /**
   * @param dataService 
   * Service for the getter/setting methods for the component communication
   */
  constructor(private dataService:DataService,router:Router) {
    this.dataService.getProductToCart().subscribe(()=>{
      this.count=this.dataService.getCartItemsCount();
    });

    router.navigate(['']);
  }
  ngOnInit(){}

}
