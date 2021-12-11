import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { ProductService } from '../../services/product.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertType, NameAlert, ColorAlert,  } from '../../shared/interfaces/alert.interfaces';
import { faExclamation, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit {

idCompany:string=''
company:any={}
categories:any=[]
productos:any=[]
alert!:AlertType;
  constructor(private route: ActivatedRoute, private companyService:CompanyService,private productService:ProductService,public  dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const id =params['id']
      this.idCompany=id
      console.log('id: ',id)
    })

    this.getCompany()
    this.getProducts()
  }
  openDialog(){
    this.dialog.open(AlertComponent,{
      hasBackdrop: false,
      data: this.alert
    });
  }
  deleteProduct(idProduct:string){
    this.productService.deleteProduct(idProduct).subscribe(
      (resp:any)=>{
        if(resp.ok){
          this.alert = {
            name: NameAlert.success,
            icon: faCheckCircle,
            msj:resp.msj,
            color: ColorAlert.success
          }
          this.openDialog();
          this.productos=[]
          this.getProducts()

        }else{
          this.alert = {
            name: NameAlert.error,
            icon: faTimesCircle,
            msj:resp.msg,
            color: ColorAlert.error
          }
          this.openDialog();
        }
      }
    )
  }
  getProducts(){
    this.companyService.getProducts(this.idCompany).subscribe(
      (resp: any)=>{
        this.categories=resp.products
        for(let i=0;i<this.categories.length;i++){
          for(let j=0;j<this.categories[i].productos.length;j++){
            this.productos.push(this.categories[i].productos[j])
          }
  
        }
       // console.log(this.products)
      })

      
  }
  getCompany(){
    
    this.companyService.getCompany(this.idCompany).subscribe(
     (resp: any)=>{
       this.company=resp.company
     }
   )
 }

}
