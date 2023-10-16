import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BlogListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [BlogListComponent],
  providers:[
    HttpClientModule
  ]
})
export class BlogApiModule { }
