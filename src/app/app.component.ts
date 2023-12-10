import { Component,OnInit} from '@angular/core';
import { PreptalkserviceService } from './preptalkservice.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from './ecommerce/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  digiQuestions:any=[];
  itwillopen: boolean=false;
  constructor(
    public preptalksservice:PreptalkserviceService,
    public ecoservice:ServicesService,
    private router:Router
    ,private http:HttpClient
     ){

  }
  title = 'preptalksproject';
  show:boolean=false;
 ngOnInit(){
     setTimeout(() => {
      this.show=true
     }, 5000);
     this.router.navigate(['ecommerce/home']);
   }


// no service calls 
  gotoDigitalPrep(){
    alert("ÿeah it will open now ")
    this.itwillopen=true;
     this.router.navigate(['/learning/home'])
  }
  gotologin(){
    this.router.navigate(['/ecommerce/home']);
  }
//           chatbot                       //
openReview:boolean=false;
UserComments:any='';
FeedUserName:any='';
productAddedTocart:boolean=false;
openReviewPopup(){
   this.openReview=!this.openReview
}
submitReviews(){
  let req:any={
    "username":this.FeedUserName,
    "feedback":this.UserComments,
    "ratings":this.newratings,
    "date":new Date()
  }
  this.ecoservice.submitFeedback(req).subscribe((data:any)=>{
    console.log("data")
  })
  this.openReview=false;
   this.productAddedTocart=true;
   setTimeout(() => {
    this.productAddedTocart=false;
   }, 2000);
}
newratings:number=3;
selectRatings(ratings:any){
  this.newratings=ratings;
 }
}
