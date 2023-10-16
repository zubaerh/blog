import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  setEmail: any;
  setPassword: any;
  mEmail: any;
  mPassword: any;

  constructor(private dataService: DataService){}

  email= new FormControl('',[
    Validators.required,
    Validators.email
  ])
  password= new FormControl('',[
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')
  ])
  loginForm = new FormGroup({
    email: this.email,
    password: this.password
    
  })

  onSubmit(){
    this.setEmail = this.email.value;
    this.setPassword = this.password.value;
    console.log(this.setEmail);
    console.log(this.setPassword);
    this.matchInfo();
  }

  ngOnInit() {
    this.dataService.email$.subscribe(email => {
      this.mEmail = email;
    });

    this.dataService.password$.subscribe(password => {
      this.mPassword = password;
    }); 
  }

  matchInfo(){
    if(this.setEmail === this.mEmail && this.setPassword === this.mPassword){
      console.log(this.mEmail);
      console.log(this.setEmail);
      alert('Log In Successfully');
    }else{
      alert('Invalid Email and Password');
    }
  }


}
