import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertType, NameAlert, ColorAlert,  } from '../shared/interfaces/alert.interfaces';
import { faExclamation, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orders:any=[]
bikers:any=[]
bikerID:string=''
alert!:AlertType;

  constructor(private orderService:OrderService,public  dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOrder()
    this.getBikers()
  }

  takeOrder(idOrder:string){
    console.log(idOrder,this.bikerID)
    if(this.bikerID==''){
      this.alert = {
        name: NameAlert.error,
        icon: faTimesCircle,
        msj:"Seleccione el repartidor",
        color: ColorAlert.error
      }
      this.openDialog();
    }

      else{
  
    this.orderService.putTakeOrder(idOrder,'accepted',this.bikerID).subscribe(
      (resp: any)=>{
  
        if(resp.ok){
          this.alert = {
            name: NameAlert.success,
            icon: faCheckCircle,
            msj:"Orden asignada",
            color: ColorAlert.success
          }
          this.openDialog();
          this.orders=[]
          this.getOrder()
          }
          
        }
      
    
    )
    }

   
}
  
  openDialog(){
    this.dialog.open(AlertComponent,{
      hasBackdrop: false,
      data: this.alert
    });
  }

  getOrder(){
    this.orderService.getOrders().subscribe(
     (resp: any)=>{

       this.orders=resp
     
     }
   )
 }

 getBikers(){
  this.orderService.getBikers().subscribe(
    (resp: any)=>{

      this.bikers=resp.bikers
    
    }
  )
 }
}
