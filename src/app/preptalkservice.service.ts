import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreptalkserviceService {
  [z: string]: any;
  userName: any = ''
  userDetails: any = {
    "userId": 2,
    "firstName": "Bharat",
    "lastName": "Biradar",
    "emailId": "bharatbiradar2000@gmail.com",
    "address": "Pune Maharashtra",
    "password": "123"
  }

  //                         deployement                           //
  // newBaseUrl = "https://proxy.cors.sh/https://prepshopbackend.onrender.com";
  // baseUrl = "https://proxy.cors.sh/https://prepshopbackend.onrender.com/preptalk/v1";
  // userDetailsLoginUrl = "https://proxy.cors.sh/https://prepshopbackend.onrender.com/createAccount/login"
 //                         deployement                           //

   newBaseUrl = "http://localhost:8080";
   baseUrl = "http://localhost:8080/preptalk/v1";
  userDetailsLoginUrl= "http://localhost:8080/createAccount/login";
  
 userDetailsUrl = this.newBaseUrl + "/createAccount";
  constructor(private httpclient: HttpClient) { }

  // getting the data from table 
  getDigitalQuestions(): Observable<PreptalkserviceService[]> {
    return this.httpclient.get<PreptalkserviceService[]>(`${this.baseUrl}` + "/digitalquestions")
  }
  //adding a new data from table 
  addnewdigiQuestion(digiAdd: PreptalkserviceService): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl}` + "/digitalquestions", digiAdd);
  }
  //adding a new data from table 
  createaNewAccount(userDetails: PreptalkserviceService): Observable<Object> {
    this.userName = userDetails['firstName']
    return this.httpclient.post(`${this.userDetailsUrl}` + "/submit", userDetails);
  }

  loginByPassword(userDetails: PreptalkserviceService): Observable<Object> {
    return this.httpclient.post(`${this.userDetailsLoginUrl}`, userDetails);
  }
  getUserDetails(userNewDetails: any) {
    this.userDetails = userNewDetails;
  }
}


