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

  constructor(private dataService:DataService) {
    
   }
  
  ngOnInit() {
    this.categories=this.dataService.getCategories();
    this.dataService.setSelectedcategory(this.selectedCategory);
  }
  selectCaegory(category){
    this.selectedCategory=category;
    this.dataService.setSelectedcategory(category);
  }

}
