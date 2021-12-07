import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  companies:any=[]
  offset:number=0;
  limit:number=4;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
     this.getCompanies(this.offset,this.limit)
  }

  getCompanies(offset:number,limit:number){
     //Enviar archivos al servicio
     this.companyService.getCompanies(limit,offset).subscribe(
      (resp: any)=>{
        this.companies=resp.companies[0]
        console.log(this.companies)
      }
    )
  }

}
