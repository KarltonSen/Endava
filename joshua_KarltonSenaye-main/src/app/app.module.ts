import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { JSONPlaceholderService } from './services/jsonplaceholder.service';



@NgModule({
  declarations: [
    
    HomeComponent,
    AppComponent,
    Blog1Component,
    Blog2Component,
    Blog3Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
   

    BrowserAnimationsModule
  ],
  providers: [JSONPlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

