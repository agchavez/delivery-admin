import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UbicationService } from 'src/app/services/ubication.service';
import * as mapboxgl  from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { AlertType, ColorAlert, NameAlert } from '../../shared/interfaces/alert.interfaces';

import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  imgLogo!:File;
  imgBanner!:File;
  nombre:string=''
  ubications:any=[]
  latLong:any=[]
  municipallies:any
  munic:any
  fullRequired:boolean=false
  clickMarker:any=0
  nombreEmpresa:string=''
  direccion:string=''
  banner:any
  logo:any
  telefono:string=''
  mapbox = (mapboxgl as typeof mapboxgl);
  map!: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  alert!:AlertType

  constructor(private ubicationService: UbicationService,private dialog: MatDialog,private companyService: CompanyService,private router:Router) { 
    this.mapbox.accessToken = environment.mapsToken;
  }

  
  ngOnInit(): void {
    

    //this.addMarker(map,this.clickMarker)
 
     this.getUbications()
 
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
   readUrlBanner(event:any){

     // this.urlLicencia=''
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
  
        this.imgBanner = event.target.files[0];
          // reader.onload = (event:any) => {
  
          //     this.urlLicencia = event.target.result;
          // }
  
          reader.readAsDataURL(event.target.files[0]);
      }
   }
   save(){

    if(this.nombreEmpresa==undefined||this.imgBanner==undefined||this.imgLogo==undefined||this.latLong==undefined||this.telefono==undefined){
      this.alert = {
        name: NameAlert.error,
        icon: faTimesCircle,
        msj:"Complete todos los campos",
        color: ColorAlert.error
      }

      this.openDialog();
      return
    }else{
      let location={
        "lat":this.latLong.lat,
        "long":this.latLong.long,
        "description":this.direccion
  
  }
 

        //Enviar archivos al servicio
        this.companyService.uploadImage(this.imgBanner,this.imgLogo,this.telefono,this.nombreEmpresa,location).subscribe(
          (resp: any)=>{
            if(resp.ok){
              this.alert = {
                name: NameAlert.success,
                icon: faTimesCircle,
                msj:"Empresa agregada",
                color: ColorAlert.success
              }
              this.openDialog();
              this.router.navigateByUrl('/company/list');
  
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
   
 check(){
   this.loadMap()
 
   this.fullRequired=true
 }
  
  getUbications(){
    this.ubicationService.getUbication().subscribe(
      res=>{
        this.ubications=res.ubications[0]

        console.log('ubications:',this.ubications)
      },
      error=>{
        console.log(error)
      }
    )
    
  }
  getMunicipally(){

    this.munic=['']
    this.munic=this.municipallies[0]
    console.log(this.munic)
    //this.municipallies=mun
    //console.log(mun)
    //this.municipal()
    
  }

  loadMap(){
    
    // (mapboxgl as any).accessToken = environment.mapsToken;
    
    // const map = new mapboxgl.Map({
    // container: 'mapa',
    // style: 'mapbox://styles/mapbox/streets-v11',
    // center:[this.latLong.long,this.latLong.lat],
    // zoom:8
    // });

    if(this.map!=undefined){
      this.map.setCenter([this.latLong.long,this.latLong.lat])
      
    }
    else{
      this.map = new mapboxgl.Map({
        container: 'mapa',
        style: this.style,
        zoom: 8,
        center: [this.latLong.long,this.latLong.lat]
      });
      this.map.addControl(new mapboxgl.NavigationControl());
    }


    this.addMarker(this.map,this.clickMarker)
    //var marker:any = new mapboxgl.Marker().setLngLat([this.latLong.long,this.latLong.lat]).addTo(this.map);

  
    }

  //Abrir dialog
openDialog(){
  this.dialog.open(AlertComponent,{
    //hasBackdrop: false,
    data: this.alert
  });
}

  addMarker(map:any,clic:number){
    var marker:any;
    var newDirection;
    localStorage.removeItem('newDirection')
    
    map.on('click',  (e:any) => {
     clic++
     
      if(clic==1){
        console.log(e.lngLat)
        this.latLong.lat=e.lngLat.lat,
        this.latLong.long=e.lngLat.lng
        //newDirection={"long":e.lngLat.lng,"lat":e.lngLat.lat}
        //localStorage.setItem('newDirection',JSON.stringify(newDirection))
       marker = new mapboxgl.Marker().setLngLat([e.lngLat.lng,e.lngLat.lat]).addTo(map);
      }  

      else{
        marker.remove()
        console.log(e.lngLat)

        marker = new mapboxgl.Marker().setLngLat([e.lngLat.lng,e.lngLat.lat]).addTo(map);
        newDirection={"long":e.lngLat.lng,"lat":e.lngLat.lat}
      }
      }
      );


  }

}
