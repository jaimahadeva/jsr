import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreptalkserviceService } from 'src/app/preptalkservice.service';
import { ServicesService } from '../services.service';
import { LocalecomService } from '../localecom.service';

@Component({
  selector: 'app-ecomcontent',
  templateUrl: './ecomcontent.component.html',
  styleUrls: ['./ecomcontent.component.css']
})
export class EcomcontentComponent implements OnInit {

  constructor(public preptalkservices:PreptalkserviceService,
    private ecoservice:ServicesService,
    //  private ecoservice:LocalecomService,
    private router:Router) { }

  ngOnInit(): void {
    this.ecoservice.searchedProduct='';
     this.ecoservice.searchedResults=[];
    let req:any={
      "userid":this.preptalkservices.userDetails.userId
    }
    this.ecoservice.CartsCounts(req).subscribe((data:any)=>{
      this.ecoservice.cartsCount=data;
      console.log("222",this.ecoservice.cartsCount)
    });
    this.getAllProductsHome();
  
  }
  gotoProdcts(prd:any){
    this.ecoservice.searchedProduct=prd.productName;
    console.log("prdo",this.ecoservice.searchedProduct)
    this.getSearchedResults();
   this.router.navigate(['/ecommerce/products'])
  }

 
  searchedProduct:any='';
  pageNumber:number=0;
  getSearchedResults(){
    this.ecoservice.pageNumber=0;
    this.ecoservice.getSearchedProducts = 0;
      let req = {
        category:
          this.ecoservice.searchedProduct,
          "pageNumber":this.ecoservice.pageNumber
      }
      this.ecoservice.getSearchedProduct(req).subscribe((data:any) => {
        this.ecoservice.searchedResults = data;
        console.log("sdsd",this.ecoservice.searchedResults)
        this.getFilterBrandz();
       })
      this.router.navigate(['/ecommerce/products'])
  }
  brandNames:any=[];
  getFilterBrandz(){
    this.ecoservice.brandNames = [];
    for (let i = 0; i < this.ecoservice.searchedResults.length; i++) {
      this.ecoservice.brandNames.push(this.ecoservice.searchedResults[i]);
    }
    for (let i = 0; i < this.ecoservice.brandNames.length; i++) {
      this.ecoservice.brandNames[i].checked = false;
    }
  }
  imagename1:any='';
  imagename2:any='';
 imagedesci1:any='';
 imagedesci2:any='';
 description:any='';
 category:any='';
  addProductonHomepage(){
    let req={
      "description": this.description,
      "firstName": this.preptalkservices.userDetails.firstName,
      "productName": this.category,
      "subProducts": [
        {
          "imagename": this.imagename1,
          "productdescription": this.imagedesci1,
        },
        {
          "imagename": this.imagename2,
           "productdescription": this.imagedesci2,
         }
      ],
      "timingLeft": "string",
      "userId": this.preptalkservices.userDetails.userId
    }
    console.log("req",req)
    if(this.description!='' && this.category!==''){
      this.ecoservice.addProductonHomepage(req).subscribe((data:any)=>{
        console.log(data)
      })
    }
   }


   ProductsList:any=[];
  
   getAllProductsHome(){
    let req = {
      "pageNumber":this.pageNumber
    }
    this.ecoservice.getAllProductsHome(req).subscribe((data:any)=>{
      this.ProductsList=[...this.ProductsList, ...data]
      console.log(this.ProductsList);

    })
   }  

 
 


}
