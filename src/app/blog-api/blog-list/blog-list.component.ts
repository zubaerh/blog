import { Component, OnInit } from '@angular/core';
import { BlogApiService, Blogpost } from '../blog-api.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{
  outputArry: any;
  constructor(private blogApiService: BlogApiService){
  }
  ngOnInit() {
    this.blogApiService.getpost().subscribe((blogs)=>{
      this.outputArry = blogs;
      console.log(this.outputArry);
      
    });
   }

}
