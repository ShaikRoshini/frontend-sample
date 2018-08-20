import { Component, OnInit } from '@angular/core';
import {NgForm,FormControl,FormsModule} from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
public id:any;
public password:any;

  constructor(private route : Router, 
    private registerservice:RegisterService,
    private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params)=>{
    
      this.id = params['id'];
     
      console.log(this.id);
    })
  }
  

  userdata = {
    password:'',
    confirmpassword:'',
    
   }
  


resetpassword()
{
  this.registerservice.resetpassword(this.userdata,this.id)
  .subscribe(
    (response)=> {
      console.log(response)
    }
  )
  this.route.navigate(['/Login']);
  }
  


}
