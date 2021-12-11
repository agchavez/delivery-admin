import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Biker } from 'src/app/shared/interface/byker';
import { BikerService } from '../service/biker.service';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent implements OnInit {

  bikers:Biker[] =[];
  count:number = 1;
  page:number = 0;
  constructor(
    private bikerService:BikerService,
    private router:Router
  ) {
    this.bikerService.getBikers(this.page, 0).subscribe(
      (data) =>{
        this.bikers = data.bikers;
        this.count = data.count;
        console.log(this.bikers);
      }
    )
   }

  ngOnInit(): void {

  }

  navigate(biker:Biker){
    this.bikerService.biker = biker;
    this.router.navigate(['/biker/solicited']);

  }

}
