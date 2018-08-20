import { Component, OnInit } from '@angular/core';
import {NgForm,FormControl,FormsModule} from '@angular/forms';
import {RegisterService} from '../register.service'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private registerservice:RegisterService) { }

  ngOnInit() {
  }
userdata = {
  email:''
}
resetpassword(){
  this.registerservice.password(this.userdata)
  .subscribe(
    (response)=> {
      console.log(response)
    }
  )
}
}
