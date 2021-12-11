import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admins.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {;
  offset:number=0;
  limit:number=4;

  admins:any=[]
  

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
   this.getAdmins(this.offset,this.limit)

  //console.log(this.admins)

  }
  
  getAdmins(offset:number,limit:number){
    this.adminService.getAdmins(limit,offset).subscribe(
     (resp: any)=>{
       this.admins=resp.admins[0]
       //console.log(this.adminsArr)
     }
   )
 }


}
