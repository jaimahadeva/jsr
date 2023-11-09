import { Component, OnInit } from '@angular/core';
import { userDetails } from '../Classes/userDetails';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { PreptalkserviceService } from '../preptalkservice.service';
import { error } from 'console';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userDetails:any=new userDetails()
createNewAccount:boolean=true
createAccount=new FormGroup({
  firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl([Validators.minLength(5),Validators.required]),
    emailId:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
})
  constructor(private preptalkService:PreptalkserviceService,
    private routes:Router) { }                                                                                                                     
  valid:boolean=false
  validation:boolean=false;
  userId:any;
  password:any;
username:any
  ngOnInit(): void {
  this.username= this.preptalkService.userName
    
  }
  // service calls
  createAccountFun(){
    let userInfo:any={};
    this.preptalkService.createaNewAccount(this.userDetails).subscribe(data=>{
      userInfo=data
      alert("Please Note Your Id ," + userInfo.userId)
     })
   
  }
  loginByPassword(){
    let req:any={
      "userId":this.userId,
      "password":this.password

    }

    this.preptalkService.loginByPassword(req).subscribe(data=>{
           console.log("data",data)
    },error=>{
         alert(""+error.message);
    }
   

    );
    
    this.routes.navigate(['/ecommerce/home']);
    
  }
//  common calls
  AcountValidators(){
    this.validation=true
    if(this.userDetails.firstName==undefined  || this.userDetails.emailId ==undefined || this.userDetails.address ==undefined || this.userDetails.password==undefined){
      this.valid=true;
    }else{
      this.valid=false;
    }
  }




  // local service calls
  gotologin(){
  
    this.createNewAccount=false;
  }
}
