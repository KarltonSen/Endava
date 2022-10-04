import { Component, OnInit } from '@angular/core';
import { UserData } from './Userdata.model';
import {JSONPlaceholderService} from './services/jsonplaceholder.service'

@Component({
  selector: 'app-root',
  template: `
 <router-outlet></router-outlet>
  `,
 styles: []
})
export class AppComponent implements OnInit {
  title = 'LvvlFrontEndProjectNg';

  userData$: UserData[]; //stores Userdata  array values

  constructor(private JSONPlaceholder: JSONPlaceholderService){
    this.userData$ = new Array<any>()
  }

  //writing a function that will send the data to the button
  getDataFromAPI(){
    this.JSONPlaceholder.getData().subscribe((userData$) => {
      console.log(UserData)
      this.userData$ = userData$
    })
  }

  ngOnInit(): void {
    
  }
}

