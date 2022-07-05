import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {

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
      userid:userid,
      username: username,
      email:email,
      phone : phone
    });
  }
  onSave(){
    this.data.saveUser(this.myUser).subscribe(sub=>{
      console.log(sub);
    });
  }
  
  }
    


