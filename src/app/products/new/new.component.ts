import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { CategoryService } from '../../services/categories.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { faTimesCircle,faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import { AlertType, ColorAlert, NameAlert } from '../../shared/interfaces/alert.interfaces';

import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-product-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name:string=''
  categories:any=[]
  companies:any=[]
  price:string=''
  descrip:string=''
  category:string=''
  company:string=''
  nameCom:string=''
  priceCom:string=''
  data:any={}
  imagenesFile!:File
  imagenes:any
  imagenes2:any=[]
  alert!:AlertType
  idCompany:string=''




  complements:any=[]

  constructor(private companyService:CompanyService,private route: ActivatedRoute,private productService:ProductService,private categoryService:CategoryService,private router:Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const id =params['idCompany']
      this.idCompany=id
    })
    this.getCompanies()
    this.getCategories(0,8)
  }


  save(){
    //console.log(this.name,this.category,this.descrip,this.price, this.company,this.complements,this.imagenesFile)
    if(this.name == ''||this.category==''||this.price==''||this.imagenes2==[]){
      this.alert = {
        name: NameAlert.error,
        icon: faTimesCircle,
        msj:'Complete los campos requeridos',
        color: ColorAlert.error
      }
      this.openDialog();
    }
    this.data={
      name:this.name,
      price:this.price,
      company:this.company,
      category:this.category,
      description:this.descrip,
      complemts:{"complements":this.complements},
      imagenes:this.imagenes2
    }

    this.productService.postNewProduct(this.data).subscribe(
      (resp: any)=>{
        if(resp.ok){
           this.alert = {
             name: NameAlert.success,
             icon: faCheckCircle,
             msj:"Producto agregado",
             color: ColorAlert.success
           }
           this.openDialog();
           this.router.navigateByUrl(`/company/detail/${this.idCompany}`);

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
    //Abrir dialog
openDialog(){
  this.dialog.open(AlertComponent,{
    //hasBackdrop: false,
    data: this.alert
  });
}
  readUrlImags(event:any){
    // this.urlLicencia=''
    this.imagenes2=[]
    if (event.target.files && event.target.files[0]) {
     var reader = new FileReader();

      for(let i=0;i<event.target.files.length;i++){
        this.imagenes2.push(event.target.files[i])


      }
   }
}
  agregarComplemento(){
    this.complements.push({"name":this.nameCom,"price":this.priceCom})
  }
  getCategories(offset:number,limit:number){
    this.categoryService.getCategories(limit,offset).subscribe(
     (resp: any)=>{
       this.categories=resp.categories[0]
       console.log(this.categories)
     }
   )
 }
  getCompanies(){
    
    this.companyService.getCompanies(8,0).subscribe(
     (resp: any)=>{
       this.companies=resp.companies[0]
       console.log(this.companies)
     }
   )
 }
}
