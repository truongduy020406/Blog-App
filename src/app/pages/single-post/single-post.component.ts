import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/comment';
import { CommmentsService } from 'src/app/services/commments.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit  {
  dataPost: any ;
  similarPost: any ;
  idBlog!:string ;
  dataComment: any;

  constructor(private post: PostsService ,private route:ActivatedRoute , private comment:CommmentsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(val =>{
      this.idBlog = val['id'];
      this.post.countView(val['id'])
      this.post.loadOnePost(val['id']).subscribe(data =>{
        this.dataPost = data;
        this.loadSimilarpost(this.dataPost.category.categoryId)
      })
      this.comment.loadCommentsByBlogID(this.idBlog).subscribe(data => {
        this.dataComment = data
        console.log(this.dataComment)
      })
    })
    
  }
  ngOnChanges(){

  }
  loadSimilarpost(categoryId:string){
    this.post.loadSimilar(categoryId).subscribe(data =>{
      this.similarPost = data
    })
  }
  addComment(event:Comment){
    event.blogID = this.idBlog;
    this.comment.addComment(event)
  }

  
}
