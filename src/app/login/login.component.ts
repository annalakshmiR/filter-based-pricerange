import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    quantity: ['',Validators.required],
    phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] 
    
  });
  }
  get f() { return this.registerForm.controls; }
 onSubmit() {
  if(this.registerForm.invalid){
  alert("Fill all the Required Details")
  }
  else if(this.registerForm.valid){
  
    this.submitted = true;
    console.log(this.registerForm.value);
    alert("Register successfully")
    }
   }

}
