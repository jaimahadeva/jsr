import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { learningcourse } from './digitalpreparation/learningcourse';

@Injectable({
  providedIn: 'root'
})
export class LearningserviceService {
private baseUrl="http://localhost:8080/preptalk/v1";
private baseUrlCourses="http://localhost:8080/preptalk/learning";
// justtryurl1='https://jaishreerammahadev.onrender.com//preptalk/learning/newlearningtopic';
// getcoursesUrl='https://jaishreerammahadev.onrender.com//preptalk/learning/learningcourses';
getcoursesUrl="";
justtryurl1=""
private baseUrlTopics="http://localhost:8080/preptalk/topics";

  constructor(private httpclient:HttpClient) { }

  // getting the data from table 
  getDigitalQuestions():Observable<LearningserviceService[]>{
  return this.httpclient.get<LearningserviceService[]>(`${this.baseUrlTopics}`+"/Allcontents")
  }
  //adding a new data from table 
  addnewdigiQuestion(digiAdd:LearningserviceService):Observable<Object>{
    return this.httpclient.post(`${this.baseUrlTopics}`+"/newContent",digiAdd);
  }

  getAllCourses():Observable<LearningserviceService[]>{
    return this.httpclient.get<LearningserviceService[]>(`${this.baseUrlCourses}`+"/learningcourses")
 }
 AddNewCourse(digiAdd:LearningserviceService):Observable<Object>{
  return this.httpclient.post(`${this.baseUrlCourses}`+"/newlearningtopic",digiAdd);
}
AllTopicNames():Observable<LearningserviceService[]>{
  return this.httpclient.get<LearningserviceService[]>(`${this.baseUrlTopics}`+"/AllTopics")
}
addNewTopics(digiAdd:LearningserviceService):Observable<Object>{
  return this.httpclient.post(`${this.baseUrlTopics}`+"/newtopic",digiAdd);
}



justtryurl1fun(req:any){
 return  this.httpclient.post(`${this.justtryurl1}`,req)
}
getcoursesUrlfun(){
 return this.httpclient.get(`${this.getcoursesUrl}`)
}

}















