import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  contactForm !: FormGroup;
  myUser = [];

  constructor(private data:DataService) { }
  
  ngOnInit(): void {
    this.contactForm=new FormGroup({
      'userid':new FormControl(null),
      'username':new FormControl(null),
      'email':new FormControl(null),
      'phone':new FormControl(null)
    });
  }
  onPushUser(){
    const userid =this.contactForm.get('userid')?.value;
    const username = this.contactForm.get('username')?.value;
    const phone = this.contactForm.get('phone')?.value;
    const email = this.contactForm.get('email').value;

   this.myUser.push({
      userid:userid,Number,
      username: username,String,
      email:email,
      phone : phone,
    });
  }
  onSave(){
    this.data.saveUser(this.myUser).subscribe(sub=>{
      console.log(sub);
    });
  }
  /* delete() {

    this.data.deleteUser(this.myUser).subscribe(res=>{
      console.log(res);
      
      alert('Employee deleted successfully');
      
    });

  } */
  
  
}
