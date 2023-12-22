import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  formSubmitted : boolean = false;

  loginForm : any = this.fb.group({
    // email: ['', [Validators.required, Validators.email]]
    email: ['', Validators.required],
    // password : ['', [Validators.required, Validators.minLength(3)]],
    password : ['', Validators.required]

  })

  constructor(private fb: FormBuilder){

  }

  login(){
    this.formSubmitted = true
    if(this.loginForm.invalid){
      return
    }
    console.log(this.loginForm)
  }

}
