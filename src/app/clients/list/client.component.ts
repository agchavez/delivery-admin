import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Client } from '../../shared/interface/client';

@Component({
  selector: 'app-biker-list',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  count:number =1;
  clients:Client[] = [];
  page:number = 0;
  constructor(
    private clientService:ClientService
  ) {
    this.clientService.getClients(10, this.page).subscribe(
      data => {
        this.clients = data.clients;
        this.count = data.count;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

  delete(client:Client){

  }



}
