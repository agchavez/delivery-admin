import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit {

idCompany:string=''
company:any={}
products:any=[]
  constructor(private route: ActivatedRoute, private companyService:CompanyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const id =params['id']
      this.idCompany=id
      console.log('id: ',id)
    })

    this.getCompany()
    this.getProducts()
  }

  getProducts(){
    this.companyService.getProducts(this.idCompany).subscribe(
      (resp: any)=>{
        this.products=resp.products
        console.log(this.products)
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
