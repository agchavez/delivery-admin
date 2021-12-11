import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show:boolean = false;
  myForm =  this.fb.group({
    email: ['',[ Validators.required, Validators.email]],
    password: ['',[ Validators.required, Validators.minLength(6)]]
  })
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  showPass(){
    this.show = !this.show;
  }
  //validar campos
  validateCamp(campo:string){
    return this.myForm.get(campo)!.invalid && this.myForm.get(campo)!.touched
  }

  login(){

    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) {
      return;
    }
    this.auth.login(this.myForm.value.email,this.myForm.value.password).
    subscribe(
      res=>{
       if (res) {
        this.router.navigateByUrl('/admin/list')

       }
      }
    )


  }

}
