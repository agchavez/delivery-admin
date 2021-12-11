
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
  export class CategoryService {
    private baseUrl:string = environment.baseUrl;
    constructor(private httpClient:HttpClient){

    }
    
    getCategories(limit:number,offset:number):Observable<any>{
        const url = `${this.baseUrl}category/all/?limit=${limit}&offset=${offset}`;
        return this.httpClient.get(url,{})
         // console.log(data)
        }

    postNewCategory(data:any):Observable<any>{
      const formData = new FormData();
      formData.set("name",data.name);
      formData.set("imgFile",data.imgFile);
  
      const url = `${this.baseUrl}category/`;
      return this.httpClient.post(url,formData)
        // console.log(data)
      }

  }
