import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertType, NameAlert, ColorAlert,  } from '../../shared/interfaces/alert.interfaces';
import { faExclamation, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-company-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  companies:any=[]
  offset:number=0;
  limit:number=4;
  alert!:AlertType;
  constructor(private companyService: CompanyService,public  dialog: MatDialog) { }

  ngOnInit(): void {
     this.getCompanies(this.offset,this.limit)
  }
  openDialog(){
    this.dialog.open(AlertComponent,{
      hasBackdrop: false,
      data: this.alert
    });
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

  deleteCompany(id:string){
    this.companyService.deleteCompany(id).subscribe(
      (resp:any)=>{
        if(resp.ok){
          this.alert = {
            name: NameAlert.success,
            icon: faCheckCircle,
            msj:'Empresa eliminada',
            color: ColorAlert.success
          }
          this.openDialog();
          this.companies=[]
          this.getCompanies(0,10)

        }else{
          this.alert = {
            name: NameAlert.error,
            icon: faTimesCircle,
            msj:'Error al agregar, intente nuevamente',
            color: ColorAlert.error
          }
          this.openDialog();
        }
      }
    )
  }

}
