import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { PreptalkserviceService } from 'src/app/preptalkservice.service';
import { LocalecomService } from '../localecom.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {
  constructor(
    //  public ecoService: ServicesService,
     public ecoService: LocalecomService,
    private preptalkService: PreptalkserviceService,
 
    private router: Router) { }
  buyNowArray: any = [];
  ngOnInit(): void {
    this.buyNowArray.push(this.ecoService.buyItem);
  }
 


  defaultImage: boolean = true;
  selectImage(se: any, sellpro: any) {
    sellpro.defaultImage = true;
    sellpro.selectedImage = se;
  }
  successMessage:any='';
  productAddedTocart: boolean = false;
  Addtocarts(a: any) {
  let productidExist = false;
  for (let i = 0; i < this.ecoService.cartsCount.length; i++) {
      if (this.ecoService.cartsCount[i].productid == a.productid) {
        productidExist = true;
      }
    }
    if (productidExist) {
      alert("This Product Already Prasent in your carts")
    }
    if (!productidExist) {
      let req: any = {
        "addedCartsDate": new Date(),
        "productid": a.productid,
        "userid": this.preptalkService.userDetails.userId,
        "productname": a.productname
      }
      this.ecoService.CartSaveProducts(req).subscribe((data: any) => {
        let req1: any = {
          "userid": this.preptalkService.userDetails.userId
        }
        this.ecoService.CartsCounts(req1).subscribe((data: any) => {
          this.ecoService.cartsCount = data;
          this.successMessage="Product successfully Added To the cart !!"
          this.productAddedTocart = true;
          setTimeout(() => {
            this.productAddedTocart = false;
          }, 2000);
        })
      })
    }

  }
  slide(direction: any, divId: any) {
    let container: any = document.getElementById(divId)
    let scrollcompleted = 0;
    var slideWar = setInterval(function () {
      if (direction == 'left') {
        container.scrollLeft -= 10;
      }
      else {
        container.scrollLeft += 10;
      }
      scrollcompleted += 10;
      if (scrollcompleted > 400) {
        window.clearInterval(slideWar);
      }
    }, 10)
  }
  orderPlaced:any={};
   BuyProduct(buy: any) {
    this.orderPlaced=buy;
    let req: any = {
      userid:this.preptalkService.userDetails.userId,
      productid:buy.productid,
      productname:buy.productname,
      ordereddate:new Date()
    }
    this.ecoService.BuyProduct(req).subscribe((data:any)=>{
      let newreq:any={
        "acceptername": "",
        "deliveredaddress": this.preptalkService.userDetails.address,
        "delivereddate": new Date(),
        "deliverypersonname": "Prakash",
        "expecteddeliverydate": new Date(),
        "orderaccepteddate": new Date(),
        "ordereddate": new Date(),
        "orderrecievedby":this.preptalkService.userDetails.firstName,
        "ownercomments": "",
        "productid": buy.productid,
        "productname": buy.productname,
        "shippeddate": new Date(),
        "shippercomments": "",
        "shippingpartner": "",
         "userid": this.preptalkService.userDetails.userId
      }
      this.ecoService.BuyProductRequiredForStatus(newreq).subscribe((data:any)=>{
  })
    })
  }
  gotoOrders(){
    this.router.navigate(['/ecommerce/myorders']);
  }
  buyedProduct:boolean=false;
  confirmedOrder(){
    this.buyedProduct=true;
    this.successMessage="Thank you For Shopping in Prepshop"
    this.productAddedTocart = true;
    setTimeout(() => {
      this.productAddedTocart = false;
      this.buyedProduct=false;
    }, 2000);
  }

}
