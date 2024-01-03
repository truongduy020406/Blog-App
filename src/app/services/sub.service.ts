import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Sub } from '../models/sub';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor(private afs: AngularFirestore ) { }


  addSub(subData:Sub){
    this.afs.collection('subscribers').add(subData).then(()=>{
      console.log("add sub successfully")
    })
  }

  checkSub(Subemail:string){
    return this.afs.collection('subscribers' , ref => ref.where('email', '==',Subemail )).get()
  }
}
