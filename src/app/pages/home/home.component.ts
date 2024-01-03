import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feturePostdata:any;
  latestPostdata:any;
  p: number = 1;
  dataCategoryParent: any;
  constructor(private posts:PostsService ,private categorySevices : CategoryService) { }

  ngOnInit(): void {
    this.posts.loadData().subscribe((data)=>{
      this.feturePostdata = data
      
    })

    this.categorySevices.loadData().subscribe(data =>{
      this.dataCategoryParent = data
    })

    this.posts.loadlatest().subscribe(val=>{
      this.latestPostdata=val
    })
  
  }

}
