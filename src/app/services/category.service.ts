import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private afs:AngularFirestore  ) { }

  loadData (){
    return this.afs.collection('category').snapshotChanges().pipe(
       map(actions =>{
         return actions.map(a =>{
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return { data ,id} 
         })
       })
     )
   }
   resarch(data: string) {
    return this.afs.collection('posts', ref =>
      ref.where('category.category', '==', data) // Specify the nested path
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
}
