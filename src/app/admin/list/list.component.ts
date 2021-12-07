import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admins.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  admins:any={}

  constructor(private adminService:AdminService
  ) { 
    
  }

  ngOnInit(): void {
  }

  
}