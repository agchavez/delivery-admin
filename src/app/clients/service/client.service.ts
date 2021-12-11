import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ClientResponse } from '../../shared/interface/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = environment.url + 'client/';

  constructor(
    private http: HttpClient
  ) { }

  getClients(limit:number = 10, offset:number = 0) {
    return  this.http.get<ClientResponse>(this.baseUrl + `all/?limit=${limit}&offset=${offset}`);
  }
}
