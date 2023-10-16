import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Blogpost {
 
}



@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) { 
  }
  getpost(){
    return this.http.get(this.url)
  }
}
