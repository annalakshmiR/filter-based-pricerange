import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Router } from '@angular/router';
//import { error } from 'console';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-invitationcard',
  templateUrl: './invitationcard.component.html',
  styleUrls: ['./invitationcard.component.css']
})
export class InvitationcardComponent implements OnInit {
  contactForm !: FormGroup;
  myUser = []; 
 

  constructor(private _data:DataService,private route:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm=new FormGroup({
      
      'username':new FormControl(null),
      'email':new FormControl(null),
      'phone':new FormControl(null)
    });
    this.contactForm = this.formBuilder.group({
      username: ['', [Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
      
    });
    
  }
  get f() { return this.contactForm.controls; }
  onPushUser(){
    const userid =this.contactForm.get('userid')?.value;
    const username = this.contactForm.get('username')?.value;
    const phone = this.contactForm.get('phone')?.value;
    const email = this.contactForm.get('email').value;

   this.myUser.push({
      userid:userid,
      username: username,
      email:email,
      phone : phone,
    });
  }
  onSave(){
    this._data.saveUser(this.myUser).subscribe(sub=>{
      console.log(sub);
    });
    this.route.navigateByUrl('/invitationrange')
  }

}
