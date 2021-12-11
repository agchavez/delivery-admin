import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {of, pipe} from 'rxjs'
import { map, tap, catchError } from 'rxjs/operators';
import { Admin } from '../interface/admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl
  private admin!:Admin;

  constructor(
    private http:HttpClient
  ) { }

  getAdmin(){
    return this.admin
  }

  login(email:string, pasword:string){
    return this.http.post(this.baseUrl + 'admin/login', {
      email:email,
      password:pasword
    })
    .pipe(
      map((response:any) => {
        this.admin = response.admin;
        localStorage.setItem('token', response.token)
        return true
      }
      ),
      catchError( err =>{
        return of(false)
      })
      )

  }

}
