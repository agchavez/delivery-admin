
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment.prod';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { AlertComponent } from '../shared/components/alert/alert.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'asdad5'
  })
};

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    private baseUrl:string = environment.baseUrl;
    constructor(private httpClient:HttpClient){

    }


    postNewProduct(data:any):Observable<any>{
   
      const formData = new FormData();
      formData.set("name",data.name);
      formData.set("price",data.price);
      formData.set("company",data.company);
      formData.set("category",data.category);
      formData.set("complemts", JSON.stringify(data.complemts));
      formData.set("description",data.description);
      console.log('data:',data.imagenes)

      for(let i=0;i<data.imagenes.length;i++){
      const img:File=data.imagenes[i]

      formData.set(`img${i}`,img);
     
      }

      
      const url = `${this.baseUrl}product/`;
      return this.httpClient.post(url,formData)
        // console.log(data)
      }

      deleteProduct(idProduct:string){
      const url = `${this.baseUrl}/product/${idProduct}`;
      return this.httpClient.delete(url)

      }

  }
