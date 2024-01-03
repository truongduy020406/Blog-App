import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Comment } from '../models/comment';

import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommmentsService {

  constructor(private afs: AngularFirestore , ) { }

  addComment(commentData:Comment){
    this.afs.collection('comments').add(commentData)
  }

  loadCommentsByBlogID(blogID: string): Observable<Comment[]> {
    return this.afs.collection('comments', ref => ref.where('blogID', '==', blogID))
      .snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Comment;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }
}
