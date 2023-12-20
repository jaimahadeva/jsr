import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreptalkserviceService } from 'src/app/preptalkservice.service';
import { ServicesService } from '../services.service';
import { OrdersComponent } from '../orders/orders.component';
import { ProductspageComponent } from '../productspage/productspage.component';
import { LocalecomService } from '../localecom.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public preptalkService: PreptalkserviceService, 
    private route: Router,
   public ecoservice :LocalecomService,
    //  public ecoservice :ServicesService
    
    ) { }
  username: any
  ngOnInit(): void {
    this.ecoservice.searchedResults=[];
    this.username = this.preptalkService.userDetails.firstName
  }
  savedTocards:any=[];
  getAllCartsDetails(){
   this.route.navigate(['/ecommerce/carts'])
  }
  offers() {
    this.route.navigate(['/ecommerce/offers'])
  }
  gotoPreshop(){
    this.route.navigate(['/ecommerce/home'])
  }
  gotoSellProducts(){
    this.route.navigate(['/ecommerce/sellproducts'])
  }
  // side nav starts
  opensidenav:boolean=false;

  openNav(){
     this.opensidenav=true;
  }
  closeNav(){
    this.opensidenav=false;
  }

  // searchedproduct
  searchedProduct:any='';
  pageNumber:number=0;
  getSearchedResults(){
    this.ecoservice.pageNumber=0;
      this.ecoservice.searchedProduct=this.searchedProduct;
      this.ecoservice.getSearchedProducts=0;
      let req = {
        category:
         
       this.ecoservice.searchedProduct,
          "pageNumber":this.ecoservice.pageNumber
      }
      this.ecoservice.getSearchedProduct(req).subscribe((data:any) => {
        this.ecoservice.searchedResults = data;
        console.log("sadasdas",this.ecoservice.searchedResults)
        this.getFilterBrandz();
       })
      this.route.navigate(['/ecommerce/products'])
  }
  gotoAvailableProducts(){
    this.searchedProduct="Mobiles";
     this.getSearchedResults();
    this.route.navigate(['/ecommerce/products'])
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
  gotoOrders(){
    this.route.navigate(['/ecommerce/myorders'])
  }
  displayUser:boolean=false;
  displayUserDetaills(){
    this.displayUser=!this.displayUser
  }
  GotoSuggestion(){
    this.route.navigate(['/ecommerce/suggestions'])
  }
  gotoLogin(){
    this.route.navigate(['/login']);
  }
}
