

  
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
  export class OrderService {
    private baseUrl:string = environment.baseUrl;
    constructor(private httpClient:HttpClient){

    }

    getOrders():Observable<any>{
    const url = `${this.baseUrl}/order/?status=pending`;
    
    return this.httpClient.get(url,{})
     // console.log(data)
    }

    getBikers():Observable<any>{
        const url = `${this.baseUrl}/biker/all/`;
        
        return this.httpClient.get(url,{})
         // console.log(data)
        }

  

  }
