import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories:any=[];
  selectedCategory:any="All Categories";

  /**
   * 
   * @param dataService Service for the getter/setting methods for the component communication
   */
  constructor(private dataService:DataService) {}
  

  /**
   * 
   * Show 'All categories ' and load the products based on it while initilizing the app
   */
  ngOnInit() {
    this.categories=this.dataService.getCategories();
    this.dataService.setSelectedcategory(this.selectedCategory);
  }
  /**
   * 
   * @param category category name
   * Invoke this method to the update latest  category while selecting a category
   */
  selectCaegory(category){
    this.selectedCategory=category;
    this.dataService.setSelectedcategory(category);
  }

}
