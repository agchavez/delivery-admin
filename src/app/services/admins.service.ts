
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment.prod';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     Authorization: 'asdad5'
//   })
// };

@Injectable({
    providedIn: 'root'
  })
  export class AdminService {
    private baseUrl:string = environment.baseUrl;
    constructor(private httpClient:HttpClient){

    }
    
    getAdmins(limit:number,offset:number):Observable<any>{
      const url = `${this.baseUrl}/admin/all/?limit=${limit}&offset=${offset}`;
        return this.httpClient.get(url,{})
         // console.log(data)
        }
  }
