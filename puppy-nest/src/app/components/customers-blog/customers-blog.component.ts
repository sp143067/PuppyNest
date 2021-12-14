import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-blog',
  templateUrl: './customers-blog.component.html',
  styleUrls: ['./customers-blog.component.css']
})
export class CustomersBlogComponent implements OnInit {

  constructor() { }
  bloglist:any[] = []
  ngOnInit(): void {
  }

  AddBlogPost(item:string){
    this.bloglist.push({id:this.bloglist.length, name:item});
    console.warn(this.bloglist)
  }

  RemoveBlogPost(id:number){
    this.bloglist = this.bloglist.filter(item=>item.id!==id);
  }

}
