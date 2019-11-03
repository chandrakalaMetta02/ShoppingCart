import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './providers/data.service';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import { CartComponent } from './cart/cart.component';
import { SidebarComponent } from './category/sidebar/sidebar.component';
import { ContentpanelComponent } from './category/contentpanel/contentpanel.component';
import { CategoryComponent } from './category/category.component';
import {SelectButtonModule} from 'primeng/selectbutton';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentpanelComponent,
    CategoryComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DropdownModule,
    DataViewModule,
    ButtonModule,
    SelectButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
