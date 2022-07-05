import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = true;

  constructor(private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      });
  }
  submit() {
    if(this.loginForm.value.email=="anna@gmail.com" && this.loginForm.value.password == "kiyochan"){
     
    alert("Logged in Successfully");
    this.route.navigateByUrl('/AdminDashboard');
    }
    else{                                                                                       
    alert("Enter the correct Username and Password");                                                                                                      
    }   
  }


}
