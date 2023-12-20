import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  constructor(private router:Router,
    private ecoservice:ServicesService) { }

  ngOnInit(): void {
    this.ecoservice.GetFeedBacks().subscribe((data:any)=>{
        console.log("data",data);
        this.feedBacks = [...data,...this.feedBacks]
    })
  }
  feedBacks:any=[
    {
      "date": "2023-11-27T20:46:38.506Z",
         "feedback": "Functionality is smooth but UI can be enhanced",
        "username": "Avinash",
        "ratings": 2,
     },
     {
        "date": "2023-11-27T20:46:38.506Z",
           "feedback": "",
          "username": "Eshwar kale",
          "ratings": 1,
       },
       {
        "date": "2023-11-27T20:46:38.506Z",
           "feedback": "",
          "username": "Unknown",
          "ratings": 3,
       },
       {
        "date": "2023-11-27T20:46:38.506Z",
           "feedback": "Best",
          "username": "Joshi ramesh",
          "ratings": 5,
       },
       {
        "date": "2023-11-27T20:46:38.506Z",
           "feedback": "Mayur",
          "username": "Mayur",
          "ratings": 3,
       },
       {
        "date": "2023-11-27T20:46:38.506Z",
           "feedback": "Swapnil Saware",
          "username": "Avinash",
          "ratings": 4,
       },
       {
        "date": "2023-11-27T20:46:38.506Z",
           "feedback": "did you perchanges domain?",
          "username": "Zuber",
          "ratings": 1,
       },
       {
        "date": "2023-11-27T20:46:38.506Z",
           "feedback": "did you perchanges domain?",
          "username": "Zuber",
          "ratings": 5,
       },
       {
        "date": "2023-11-27T20:46:38.506Z",
           "feedback": "good design",
          "username": "Unknown",
          "ratings": 5,
       }
];
changeLightmode:boolean=false;
chooseMode(){
  this.changeLightmode=!this.changeLightmode
}
gotoLogin(){
    this.router.navigate(['/login'])
}


}
