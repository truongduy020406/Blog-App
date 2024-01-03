import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs';
import firebase from '@firebase/app';
import '@firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:AngularFirestore) { }
  
  loadData (){
    return this.afs.collection('posts',ref => ref.where('isFeatured' , '==', true).limit(4)).snapshotChanges().pipe(
       map(actions =>{
         return actions.map(a =>{
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return { data ,id} 
         })
       })
     )
   }
   
   loadlatest (){
    return this.afs.collection('posts',ref => ref.orderBy('createdAt').limit(6)).snapshotChanges().pipe(
       map(actions =>{
         return actions.map(a =>{
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return { data ,id} 
         })
       })
     )
  }

  loadPostWcategory (categoryId:string){
    return this.afs.collection('posts', ref =>
      ref.where('category.categoryId', '==', categoryId) // Specify the nested path
    ).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const docData = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { data: docData, id };
        });
      })
    );
 }

 loadOnePost (postId:string){
  return this.afs.doc(`posts/${postId}`).valueChanges();
  }

loadSimilar (categoryid:string){
  return this.afs.collection('posts',ref => ref.where('category.categoryId' , '==', categoryid)).snapshotChanges().pipe(
    map(actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { data ,id} 
      })
    })
  )
}

countView(postId:string ){

  const viewCount = {
    views: firebase.firestore.FieldValue.increment(1)
  };
  this.afs.doc(`posts/${postId}`).update(viewCount).then(()=>{
  
  })
}
// return this.afs.collection('posts', ref => ref.where('isFeatured' , '==' , true) ).

}