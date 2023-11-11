import { Component, OnInit } from '@angular/core';
import { PreptalkserviceService } from 'src/app/preptalkservice.service';

@Component({
  selector: 'app-sellproducts',
  templateUrl: './sellproducts.component.html',
  styleUrls: ['./sellproducts.component.css']
})
export class SellproductsComponent implements OnInit {

  constructor(private preptalkServices:PreptalkserviceService) { }
  userDetails:any={};
  ngOnInit(): void {
    this.userDetails=this.preptalkServices.userDetails.firstName;
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


// saving a new product
aboutthisitem: any='';
addtocart: boolean=false;
category: any='';
desciption: any='';
discount: any=0;
expecteddelivery: any='';
newprice: any=0;
oldprice: any=0;
openboxpolicy: boolean=false;
productid: any=0;
productname: any='';
ratings: any=0;
ratingsgiveby: any=0;
specialdesciption: any='';
specialoffer: any='';
store: any='';
totalansweredquestions: any=0;
totalorders: any=0;
userid: any=0;
  //  services
 object:any= {
    "aboutthisitem": "string",
    "addtocart": true,
    "category": "string",
    "desciption": "string",
    "discount": 0,
    "expecteddelivery": "string",
    "newprice": 0,
    "oldprice": 0,
    "openboxpolicy": true,
    "productid": 0,
    "productname": "string",
    "ratings": 0,
    "ratingsgiveby": 0,
    "specialdesciption": "string",
    "specialoffer": "string",
    "store": "string",
    "totalansweredquestions": 0,
    "totalorders": 0,
    "userid": 0,
    "images": [
      {
        "imageid": 0,
        "imagename": "string",
        "productid": 0,
        "userid": 0
      }
    ],
    "keyfeatures": [
      {
        "featureId": 0,
        "featurename": "string",
        "imagename": "string",
        "productid": 0
      }
    ],
    
    "offers": [
      {
        "description": "string",
        "name": "string",
        "offerid": 0,
        "productid": 0
      }
    ],
   
    "productreviews": [
      {
        "productid": 0,
        "ratings": 0,
        "review": "string",
        "reviewid": 0,
        "userId": 0,
        "username": "string"
      }
    ],
    "questions": [
      {
        "answers": [
          {
            "answer": "string",
            "answerid": 0,
            "likescount": 0,
            "productid": 0,
            "userId": 0,
            "username": "string",
            "userphoto": "string"
          }
        ],
        "productid": 0,
        "question": "string",
        "questionid": 0,
        "userId": 0,
        "username": "string"
      }
    ],
   
    "specifications": [
      {
        "answer": "string",
        "heading": "string",
        "productid": 0,
        "specificationid": 0,
        "userid": 0
      }
    ],
   
  }
  addProduct(){
    let req={

    }
    alert(this.desciption + this.store + this.oldprice)
     console.log(this.oldprice)
  }

}
