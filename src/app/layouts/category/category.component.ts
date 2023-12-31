import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() dataCategory!: any;
  @Output() category = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    
  }
  ouput(data:string){
    this.category.emit(data)
  }
}
