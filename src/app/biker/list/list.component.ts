import { Component, OnInit } from '@angular/core';
import { BikerService } from '../service/biker.service';
import { Biker } from '../../shared/interface/byker';

@Component({
  selector: 'app-biker-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponentB implements OnInit {
  bikers:Biker[] =[];
  count:number = 1;
  page:number = 1;
  constructor(
    private bikerService: BikerService
  ) {
    this.bikerService.getBikers(this.page).subscribe(
      (bikers) => {
        this.count = bikers.count;
        this.bikers = bikers.bikers;
      }
    );
  }

  ngOnInit(): void {
  }

  navigate(biker:Biker){
    
  }

}
