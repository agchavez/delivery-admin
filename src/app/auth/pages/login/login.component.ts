import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show:boolean = false;
  constructor(
    private router:Router,) { 
    
  }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  showPass(){
    this.show = !this.show;
  }

  login(){
    this.router.navigateByUrl('/admin/list')

  }

}
