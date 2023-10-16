import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  getEmail: any;
  getPassword: any;
  constructor(private dataService: DataService) {}
  name= new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  email= new FormControl('',[
    Validators.required,
    Validators.email
  ])
  age= new FormControl('',[
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password= new FormControl('',[
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')
  ])
  confirm_password= new FormControl('',[
    Validators.required
  ])
  phoneNumber= new FormControl('',[
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
    
  })
  onSubmit(){
    this.getEmail = this.email.value;
    this.getPassword = this.password.value;
    console.log(this.getEmail);
    console.log(this.getPassword);
    alert('get Input!!!');
    this.sendDataToLoginComponent();
  }
  

  sendDataToLoginComponent() {
    const email = this.getEmail;
    const password = this.getPassword;
    this.dataService.setEmail(email);
    this.dataService.setPassword(password);
  }

}
