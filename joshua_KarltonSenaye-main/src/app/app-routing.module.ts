import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  /*  define page paths*/
  {path: '', component: HomeComponent},
  {path: 'appcomp', component: AppComponent},
{path: 'blog', component: Blog1Component},
{path: 'blog2', component: Blog2Component},
{path: 'blog3', component: Blog3Component},
{path: 'home', component: HomeComponent},

 /* Return back to the same page*/
{path: '**', redirectTo: ''}
];



export const AppRoutingModule = RouterModule.forRoot(routes)
