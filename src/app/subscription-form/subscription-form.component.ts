import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubService } from '../services/sub.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  checkEmail : boolean = false;
  isEmail: boolean = false
  constructor(private subServices:SubService) { }

  ngOnInit(): void {
  }
  onSubmit(data:Sub){

    const subData:Sub = {
      name :data.name,
      email:data.email
    }
    // 

    this.subServices.checkSub(subData.email).subscribe(val =>{
        if(val.empty){
          this.subServices.addSub(subData)
          this.isEmail = true
        }else{
          this.checkEmail = true
        }
    })
  }
}
