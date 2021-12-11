import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BykerResponse, Biker } from '../../shared/interface/byker';

@Injectable({
  providedIn: 'root'
})
export class BikerService {
  baseUrl = environment.baseUrl + 'biker/';
  public biker!:Biker;
  constructor(
    private http: HttpClient
  ) { }

  getBikers(page:Number,aproved:number=1, limit:Number = 10) {
    return this.http.get<BykerResponse>(this.baseUrl + `all/?limit=${limit}&offset=${page}&aproved=${aproved}`);
  }

  putAprovedBiker(id:string){
    return this.http.put(this.baseUrl + `aproved/${id}`, {});
  }
}
