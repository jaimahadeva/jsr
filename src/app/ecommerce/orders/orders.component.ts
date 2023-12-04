import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { PreptalkserviceService } from 'src/app/preptalkservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public ecoservice: ServicesService, public preptalkservice: PreptalkserviceService) { }
  AllOrders: any = [];
  productStatues: any = [];
  ngOnInit(): void {
    let req: any = {
      userid: this.preptalkservice.userDetails.userId
    }
    this.ecoservice.BuyedProductStatus(req).subscribe((data: any) => {
      this.productStatues = data;
    })
    this.ecoservice.GetAllBuyedProducts(req).subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        let req: any = {
          "productname": data[i].productname
        };
        this.ecoservice.GetCartsDetailsPage(req).subscribe((data1: any) => {
          this.AllOrders = this.AllOrders.concat(data1);
          for (let i = 0; i < this.AllOrders.length; i++) {
            this.AllOrders[i].Statuses = [];
          }
          if (this.productStatues.length > 0 && this.AllOrders.length > 0) {
            for (let i = 0; i < this.AllOrders.length; i++) {
              for (let j = 0; j < this.productStatues.length; j++) {
                if (this.AllOrders[i].productid == this.productStatues[j].productid) {
                  this.AllOrders[i].Statuses = this.productStatues[j];
                }
              }
            }
          }

        })
      }

    })

  }

  reviewSubmitted: boolean = false;
  SubmitReview(or: any) {
    let req: any = {
      productid: or.productid,
      likescount: 0,
      dislikescount: 0,
      replycount: 0,
      date: new Date,
      iscertifiedBuyer: true,
      overallExperience: or.overallExperience,
      review: or.review,
      userId: this.preptalkservice.userDetails.userId,
      username: this.preptalkservice.userDetails.firstName,
      ratings: or.ratings
    }
     or.productreviews.push(req);
     console.log("req",req)
     this.ecoservice.SubmitReview(req).subscribe((data)=>{
      })
    
     this.ecoservice.Productreviews(or).subscribe((data)=>{
     })


    this.reviewSubmitted = true;
    setTimeout(() => {
      this.reviewSubmitted = false;
    }, 2000);
  }
  newRatings:number=0;
  selectRatings(order:any,ratings:any){
    order.disabledReview=true;
    order.newRatings=ratings;
    order.ratings=ratings;
   
  }
}
