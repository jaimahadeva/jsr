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
    "firstName": "Balaji",
    "userId": 1
  }
  //  newBaseUrl = "http://localhost:8080";
  //  baseUrl = "http://localhost:8080/preptalk/v1";
  newBaseUrl = "https://cors-anywhere.herokuapp.com/https://prepshopbackend.onrender.com";
  baseUrl = "https://cors-anywhere.herokuapp.com/https://prepshopbackend.onrender.com/preptalk/v1";
  urs = "https://prepshopbackend.onrender.com"
  userDetailsUrl = this.newBaseUrl + "/createAccount";
  userDetailsUrl1 = this.urs + "/preptalk/topics/Allcontents";
  userDetailsLoginUrl = "https://prepshopbackend.onrender.com/createAccount/login"

  constructor(private httpclient: HttpClient) { }
  rendertest(): Observable<PreptalkserviceService[]> {
    return this.httpclient.get<PreptalkserviceService[]>(`${this.userDetailsUrl1}`)
  }
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


