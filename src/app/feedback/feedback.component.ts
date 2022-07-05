import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  myData = [];

   contactForm : FormGroup= new FormGroup({})
   

  constructor( private Data:DataService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'message': new FormControl('', Validators.required)
  });

}
onSubmit(){

  const name = this.contactForm.get('name')?.value;
  const email = this.contactForm.get('email')?.value;
  const message = this.contactForm.get('message')?.value;


 this. myData.push({
   name: name,
   email: email,
   message: message
 });

}
onSave(){
   this.Data.getData(this.myData).subscribe(sub=>{
     console.log(sub);
   });

}


}
