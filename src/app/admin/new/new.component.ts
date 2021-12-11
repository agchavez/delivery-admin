import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertType, ColorAlert, NameAlert } from 'src/app/shared/interfaces/alert.interfaces';
import { AdminService } from '../../services/admins.service';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  nombre:any
  apellido:any
  email:any
  telefono:any
  clave:any
  alert!:AlertType

  constructor(private dialog: MatDialog,private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    if(this.nombre==undefined||this.apellido==undefined||this.email==undefined||this.telefono==undefined||this.clave==undefined){
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
        email:this.email,
        firstName:this.nombre,
        lastName:this.apellido,
        phone:this.telefono,
        password:this.clave
      }
      //Enviar archivos al servicio
      this.adminService.postAdmin(data).subscribe(
        (resp: any)=>{
          console.log(resp)
          if(resp.msj){
            this.alert = {
              name: NameAlert.success,
              icon: faCheckCircle,
              msj:"Administrador Agregado exitosamente",
              color: ColorAlert.success
            }
            this.openDialog();

            this.router.navigateByUrl('/admin/list');


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

  //Abrir dialog
  openDialog(){
    this.dialog.open(AlertComponent,{
      hasBackdrop: false,
      data: this.alert
    });
  }
}
