import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/categories.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
offset:number=0
limit:number=8
categories:any=[]
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories(this.offset,this.limit)
  }

  getCategories(offset:number,limit:number){
    this.categoryService.getCategories(limit,offset).subscribe(
     (resp: any)=>{
       this.categories=resp.categories[0]
       console.log(this.categories)
     }
   )
 }
}
