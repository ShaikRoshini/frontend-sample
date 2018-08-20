import { Component, OnInit } from '@angular/core';
import {NgForm,FormControl,FormsModule} from '@angular/forms';
import { ActivatedRouteSnapshot,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
  }

  userdata = {
    password:'',
    confirmpassword:''
  }
}
