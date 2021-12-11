

  
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment.prod';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'asdad5'
  })
};

@Injectable({
    providedIn: 'root'
  })
  export class CompanyService {
    private baseUrl:string = environment.baseUrl;
    constructor(private httpClient:HttpClient){

    }

     //Subir images del usuario
 uploadImage(imgBanner:File,imgLogo:File,phone:string,name:string,location:any){
    const url = `${this.baseUrl}company/`;
    //const formData = new FormData();
    //formData.append('imgLogo',imgCard);
    //formData.append('imgLicense',imgLicense);
    //formData.append('email',localStorage.getItem('email-verfied') || "");
    const formData = new FormData();
    formData.set("phone",phone);
    formData.set("name",name);
    formData.set("imgLogoFile",imgLogo);
    formData.set("imgBannerFile",imgBanner);
    formData.set("lat",location.lat);
    formData.set("long",location.long);
    formData.set("description",location.description);

   // formData.append("location",JSON.stringify(location));
    return this.httpClient.post(url, formData)
  }
    
    getCompanies(limit:number,offset:number):Observable<any>{
    const url = `${this.baseUrl}company/all?limit=${limit}&offset=${offset}`;
    return this.httpClient.get(url,{})
     // console.log(data)
    }

    getCompany(idCompany:string):Observable<any>{
        const url = `${this.baseUrl}company/${idCompany}`;
        return this.httpClient.get(url,{})
         // console.log(data)
        }

    getProducts(idCompany:string):Observable<any>{
            const url = `${this.baseUrl}product/bycompany/${idCompany}`;
            return this.httpClient.get(url,{})
             // console.log(data)
            }

    deleteCompany(idCompany:string):Observable<any>{
      const url = `${this.baseUrl}company/delete/${idCompany}`;

      return this.httpClient.delete(url)
    }
  }
