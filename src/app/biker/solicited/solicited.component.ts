import { Component, Input, OnInit } from '@angular/core';
import { Biker } from '../../shared/interface/byker';
import { BikerService } from '../service/biker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicited',
  templateUrl: './solicited.component.html',
  styleUrls: ['./solicited.component.css']
})
export class SolicitedComponent implements OnInit {
  //Obtener el biker como parametro
  biker!:Biker
  constructor(
    private bikerService:BikerService,
    private router:Router
  ) {
    this.biker = this.bikerService.biker;

   }

  ngOnInit(): void {
  }

  aproved(){
    console.log("here");

    this.bikerService.putAprovedBiker(this.biker.email).subscribe(
      (response:any)=>{
        if (response.ok === true ) {
          this.router.navigate(['/biker/list']);

        }
      }
    )
  }

}
