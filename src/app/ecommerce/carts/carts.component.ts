import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { LocalecomService } from '../localecom.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  constructor(
    //  private ecoservice: ServicesService,
   private ecoservice: LocalecomService,
    public router:Router) { }
  AllCarts: any = [];
  Totalprice: number = 0;
  ngOnInit(): void {
    for (let i = 0; i < this.ecoservice.cartsCount.length; i++) {
      let req: any = {
        "productname": this.ecoservice.cartsCount[i].productname
      };
      this.ecoservice.GetCartsDetailsPage(req).subscribe((data: any) => {
        this.AllCarts = this.AllCarts.concat(data);
        for (let i = 0; i < data.length; i++) {
          this.Totalprice = data[i].newprice + this.Totalprice
        }
      })
    }
  }
  buytheProduct(carts:any){
    this.ecoservice.buyItem=carts
    this.router.navigate(['/ecommerce/buy'])
  }
}
