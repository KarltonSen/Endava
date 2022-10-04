import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs';
import { UserData } from '../Userdata.model';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {
  url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) {

    
  
   }

   //getting the json api  for the static post page info
   getData(): Observable<any>{
    
    return this.http.get<UserData[]>(this.url)
  }
}
