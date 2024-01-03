import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  signleCategory! :any;
  categoryName! :any;
  constructor( private route:ActivatedRoute , private post : PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(val =>{
      this.categoryName = val
      this.post.loadPostWcategory(val['id']).subscribe(data =>{
          this.signleCategory = data
          console.log(this.signleCategory)
      })
    })
  }

}
