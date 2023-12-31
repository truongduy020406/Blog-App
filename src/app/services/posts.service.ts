import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:AngularFirestore) { }
  
  loadData (){
    return this.afs.collection('posts',ref => ref.where('isFeatured' , '==', true)).snapshotChanges().pipe(
       map(actions =>{
         return actions.map(a =>{
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return { data ,id} 
         })
       })
     )
   }
   
 
}
// return this.afs.collection('posts', ref => ref.where('isFeatured' , '==' , true) ).