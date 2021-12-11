import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/categories.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { faTimesCircle,faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import { AlertType, ColorAlert, NameAlert } from '../../shared/interfaces/alert.interfaces';

import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
offset:number=0
limit:number=8
categories:any=[]
nombreCategoria:string=''
imgLogo!:File;
alert!:AlertType

  constructor(private categoryService:CategoryService,private modalService: NgbModal,private dialog: MatDialog,) { }

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

 readUrlLogo(event:any){
  // this.urlLicencia=''
  if (event.target.files && event.target.files[0]) {
   var reader = new FileReader();


   this.imgLogo = event.target.files[0];
     // reader.onload = (event:any) => {

     //     this.urlLicencia = event.target.result;
     // }

     reader.readAsDataURL(event.target.files[0]);
 }
}

   open(content:any) {
    this.modalService.open(content);
  }
  
  save(){
    if(this.imgLogo==undefined||this.nombreCategoria==undefined){
      this.alert = {
        name: NameAlert.error,
        icon: faTimesCircle,
        msj:"Complete todos los campos",
        color: ColorAlert.error
      }

      this.openDialog();
      return
    }else{
      let data={
        name:this.nombreCategoria,
        imgFile:this.imgLogo
      }
      this.categoryService.postNewCategory(data).subscribe(
        (resp: any)=>{
          if(resp.ok){
            this.alert = {
              name: NameAlert.success,
              icon: faCheckCircle,
              msj:"Categoria agregada",
              color: ColorAlert.success
            }
            this.openDialog();
            this.modalService.dismissAll()
            this.getCategories(this.offset,this.limit)

          }else{
            //this.loading = false;
            this.alert = {
              name: NameAlert.error,
              icon: faTimesCircle,
              msj:resp.msj,
              color: ColorAlert.error
            }
            this.openDialog();
          }
        }
      )
}


}

  openDialog(){
    this.dialog.open(AlertComponent,{
      //hasBackdrop: false,
      data: this.alert
    });
  }

}
