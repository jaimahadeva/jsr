import { Component, ElementRef, OnInit } from '@angular/core';
import { PreptalkserviceService } from 'src/app/preptalkservice.service';
import { ServicesService } from '../services.service';

import { LocalecomService } from '../localecom.service';

@Component({
  selector: 'app-sellproducts',
  templateUrl: './sellproducts.component.html',
  styleUrls: ['./sellproducts.component.css']
})
export class SellproductsComponent implements OnInit {

  constructor(private preptalkServices:PreptalkserviceService,
    private service:ServicesService,
    // private service:LocalecomService,
    ) { }
  userDetails:any={};
  addedProducts:any=[]
  ngOnInit(): void {
    this.userDetails=this.preptalkServices.userDetails;
    // getproductsbyid
    let req ={
      "userid":this.userDetails.userId
    }
    this.service.ecomLoader = true;
    this.service.getProductsListByuserId(req).subscribe((data:any)=>{
        this.addedProducts=data;
    })

   }
  divId:any='OffersCard';
  slide(direction:any,divId:any){
    let container:any=document.getElementById(divId)
    let scrollcompleted=0;
    var slideWar=setInterval (function(){
      if(direction=='left'){
        container.scrollLeft-=10;
      }
      else {
        container.scrollLeft+=10;
      }
      scrollcompleted+=10;
      if(scrollcompleted>400){
        window.clearInterval(slideWar);
      }
    },10)
   }

 
// saving a new product api
 contentEditable:boolean=false;
 contentEditablew:boolean=false
  //  services

   selectedImage:any="https://m.media-amazon.com/images/I/91p5L+GitZL._SX679_.jpg";
  defaultImage:boolean=true;
  selectImage(se:any,sellpro:any){
   sellpro.defaultImage=true;
    sellpro.selectedImage=se;

  }
 addAnewProductrequest:any= 
 {
  "aboutthisitem": "string",
  "addtocart": false,
  "category": "string",
  "desciption": "string",
  "discount": 0,
  "newprice": 0,
  "expecteddelivery": "string",
  "oldprice": 0,
  "openboxpolicy": true,
  "productname": "string",
  "ratings": 0,
  "ratingsgiveby": 0,
  "specialdesciption": "string",
  // "stringproductid":"string",
  "specialoffer": "string",
  "store": "string",
  "totalansweredquestions": 0,
  "totalorders": 0,
  "userid": 0,
  "itemsLeft":1,
  "images": [
    {
     "imagename": "string",
     }
  ],
  "keyfeatures": [
    {
      "featurename": "string",
      "imagename": "string",
     }
  ],
 "offers": [
    {
      "description": "Add Offer Details",
      "name": "Add Offer Name",
    
    }
  ],
 "productreviews": [],
  "questions": [
    {
      "answers": [
        {
          "answer": "Answer ??",
           "username": "string",
          "userphoto": "string"
        }
      ],
      "question": "Add Question",
      "username": "Add Question"
    }
  ],
  "specifications": [
    {
      "answer": "striE.g.  Handset, 33W Charger, USB Type-C Cable, Sim Eject Tool, Protective Case, Quick Start Guideng",
      "heading": "Model Number",
    }
  ]
 

   
  }
  // services
  addProduct(){
     this.contentEditable=true;
 }
 proceedToadd(){
 
  console.log("data",this.addAnewProductrequest)
  // this.service.addProductS(this.addAnewProductrequest).subscribe((data)=>{
  //   this.contentEditable=false;
  //   console.log("data",data)
  // })
 }
 one(){
 
  this.addAnewProductrequest.store=this.userDetails.firstName;
  this.addAnewProductrequest.userid=this.userDetails.userId;
    this.service.addProductS(this.addAnewProductrequest).subscribe((data)=>{
    this.contentEditable=false;
    console.log("data",data)
  })
 }
//  services
  addOffer(){
    this.addAnewProductrequest.offers.push({
      "description": "Add Offer Details",
      "name": "Add Offer Name"
     });
  }
  addKeyFeatures(){
    this.addAnewProductrequest.keyfeatures.push({
    "featurename": "E.g. 7 days Service Centre Replacement",
    "imagename": "image if any"
    })
  }
  addSpecifications(){
    this.addAnewProductrequest.specifications.push({
      "answer": "E.g.  Handset, 33W Charger, USB Type-C Cable, Sim Eject Tool, Protective Case, Quick Start Guide",
      "heading": "Model Number",
      "userid":this.userDetails.userId
     });
  }
  addNewImage(){
    if(this.addAnewProductrequest.images.length<5){
      this.addAnewProductrequest.images.push({
        "imagename": "add imagee",
        "userid":this.userDetails.userId
      })
    }
  }
  addQuestion(){
    this.addAnewProductrequest.questions.push({
      "question": "Add new question",
      "answers":[{
        "answer":"your answer??"

      }]
      });
  }
}
