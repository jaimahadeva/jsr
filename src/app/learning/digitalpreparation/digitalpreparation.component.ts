import { Component, Input, OnInit } from '@angular/core';
import { digiAddnewQ1 } from './digiAddnewQ1';
import { Router } from '@angular/router';
import { LearningserviceService } from '../learningservice.service';
import { learningcourse } from './learningcourse';
import { addNewTopic } from './addnewTopic';
import { addnewContent } from './addnewContent';
import { LearninglocalserviceService } from '../learninglocalservice.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Globals } from 'src/app/Globals';
import { PreptalkserviceService } from 'src/app/preptalkservice.service';


@Component({
  selector: 'app-digitalpreparation',
  templateUrl: './digitalpreparation.component.html',
  styleUrls: ['./digitalpreparation.component.css']
})
export class DigitalpreparationComponent implements OnInit {

  digiAdd: any = new addnewContent();
  ServiceCallsParameter: boolean = true;
  
  addAquestionForm=new FormGroup({
    question:new FormControl('',[Validators.required]),
    answer:new FormControl('',[Validators.minLength(5),Validators.required])
  })
  // while local
  // ServiceCallsParameter:boolean=false;
  addnewcourse: any = new learningcourse();
  addnewTopi: any = new addNewTopic();
  digiQuestions: any = [];
allCourseNames: any = [];
 allTopicNames: any = [];
 questionsArray:any=[];
 allTopicNamesNew:any=[];
  constructor(
    private preptalksservice:LearningserviceService,
   


    // private preptalksservice: LearninglocalserviceService,
    private router: Router) { }

  ngOnInit(): void {

    this.getdigiQuestions();
    this.getAllCourses()
  }
  // service calls starts here 
  onsibmit() {
    alert("thank you " + this.digiAdd.questions + "For the registration")
    this.digiAdd.courseId = this.addnewContentArray.courseId;
    this.digiAdd.topicId = this.addnewContentArray.topicId
    this.preptalksservice.addnewdigiQuestion(this.digiAdd).subscribe(data => {
      this.getdigiQuestions();
    })
  }

  getdigiQuestions() {
    this.preptalksservice.getDigitalQuestions().subscribe(data => {
      this.digiQuestions = data;
    })
  }

  getAllCourses() {
    this.preptalksservice.getAllCourses().subscribe(data => {
      this.allCourseNames = data;
      this.getAllTopics();
    })
  }

  addnewCourses() {
    this.preptalksservice.AddNewCourse(this.addnewcourse).subscribe(data => {
      this.getAllCourses();
    })
  }


  getAllTopics() {
    this.preptalksservice.AllTopicNames().subscribe(data => {
      this.allTopicNames = data;
    })
  }
  addNewTopic() {
    this.addnewTopi.courseId = this.clickedCourseName
    this.preptalksservice.addNewTopics(this.addnewTopi).subscribe(data => {
      this.getAllTopics()
    })

  }

  getAllContent() {
    this.preptalksservice.AllTopicNames().subscribe(data => {
      this.allTopicNames = data;
      console.log("älltopics", data)
    })
  }
  addNewContent() {
    this.addnewTopi.courseId = this.clickedCourseName
    this.preptalksservice.addNewTopics(this.addnewTopi).subscribe(data => {
      this.getAllTopics()
    })
  }

  editQuestions(questionsArrayForm:any){
    console.log("value",questionsArrayForm)
    this.questionsArray.courseId = this.addnewContentArray.courseId;
    this.questionsArray.topicId = this.addnewContentArray.topicId
    this.preptalksservice.addnewdigiQuestion(this.questionsArray).subscribe(data => {
      this.getdigiQuestions();
    })
  }
  // service calls ends here 




















  // common functions starts here 
  
  clickedCourseName: number = 0;
  getClickedCourse(courses: any) {
    for(let i=0;i<this.allCourseNames.length;i++){
      this.allCourseNames[i].active=false;
     }
    courses.active=true
    console.log("1",courses)
    this.clickedCourseName = courses.courseId;
    this.allTopicNamesNew=[];
  
    for(let i=0;i<this.allTopicNames.length;i++){
      this.allTopicNames[i].active=false
      if(this.allTopicNames[i].courseId==courses.courseId){
        this.allTopicNamesNew.push(this.allTopicNames[i])
      }
    }
   
   
  }

  addnewContentArray: any = {}
  getClickedTopicName(topicNames: any) {
   for(let i=0;i<this.allTopicNamesNew.length;i++){
    this.allTopicNamesNew[i].active=false;
   }
    topicNames.active=true;
    this.addnewContentArray.courseId = topicNames.courseId;
    this.addnewContentArray.topicId = topicNames.topicId;
  }
  makeAddnewTrue: boolean = false;
  makeAddTopicTrue() {
    this.makeAddnewTrue = true;
  }

  showAnswer(questions: any) {
  
    questions.view = !questions.view;
  }
  showAnswer1(questions: any) {
    this.questionsArray=questions
 
  }


  // common functions ends here 







  // local Data starts here 

  //  onsibmit(){
  //   alert("thank you "+ this.digiAdd.questions+ "For the registration")
  //  }

  // getdigiQuestions(){
  //   this.digiQuestions= this.preptalksservice.getDigitalQuestions()
  //   }

  // getAllCourses(){
  //   this.allCourseNames= this.preptalksservice.getAllCourses()
  // for(let i=0;i<this.allCourseNames.length;i++){
  //   this.allCourseNames[i].active=false;
  // }
  // }

  // getAllTopics(){
  // this.allTopicNames=this.preptalksservice.AllTopicNames()
  // }

  // getAllContent(){
  //  this.allTopicNames=this.preptalksservice.AllTopicNames();
  //  console.log("12",)
  // }
  //  addNewTopic() {
  // }
  // addnewCourses() {
   
  // }
  // editQuestions(questionsArrayForm:any){

  // }

  // local Data ends here 
}
