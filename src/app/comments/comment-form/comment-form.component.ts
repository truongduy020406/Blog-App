import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/models/comment';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  commentForm!: FormGroup;
  @Output() comment = new EventEmitter<Comment>();
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
      this.commentForm  = this.fb.group({
        name: ['',Validators.required],
        email: ['',(Validators.required, Validators.email)],
        website: ['',Validators.required],
        comment:['',Validators.required],
      })
  }
  onSubmit(){
    const CommentData: Comment = {
      name: this.commentForm.value.name,
      email : this.commentForm.value.email,
      website:this.commentForm.value.website,
      comment:this.commentForm.value.comment,
      createdAt: new Date(),
      blogID:''
    }
    this.comment.emit(CommentData)
    console.log()
    this.commentForm.reset()
  }
}
