import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreptalkserviceService {
  [z: string]: any;
  userName:any=''
  userDetails:any={
    "firstName":"Bharat",
    "lastName":"Mule",
    "userId":5
  }
  private newBaseUrl="https://prepshopbackend.onrender.com";
private baseUrl="http://localhost:8080/preptalk/v1";
private userDetailsUrl= this.newBaseUrl+"/createAccount";
private userDetailsLoginUrl="https://prepshopbackend.onrender.com/createAccount/login"
  
  constructor(private httpclient:HttpClient) { }

  // getting the data from table 
  getDigitalQuestions():Observable<PreptalkserviceService[]>{
  return this.httpclient.get<PreptalkserviceService[]>(`${this.baseUrl}`+"/digitalquestions")
  }
  //adding a new data from table 
  addnewdigiQuestion(digiAdd:PreptalkserviceService):Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`+"/digitalquestions",digiAdd);
  }

   //adding a new data from table 
   createaNewAccount(userDetails:PreptalkserviceService):Observable<Object>{
    this.userName=userDetails['firstName']
    console.log("userDetails",this.userName);
    return this.httpclient.post(`${this.userDetailsUrl}`+"/submit",userDetails);
    
  }

  loginByPassword(userDetails:PreptalkserviceService):Observable<Object>{
   return this.httpclient.post(`${this.userDetailsLoginUrl}`,userDetails);
   }
  functt(){
    alert("okay")
  }
  // getUserDetails(userNewDetails:any){
  //    this.userDetails =userNewDetails;
  //   return userNewDetails;
  // }

}
