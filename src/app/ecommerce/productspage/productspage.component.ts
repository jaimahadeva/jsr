import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { PreptalkserviceService } from 'src/app/preptalkservice.service';
import { LocalecomService } from '../localecom.service';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.css']
})
export class ProductspageComponent implements OnInit {

  constructor(
    //  public ecoService: ServicesService,
     public ecoService: LocalecomService,
    public preptalkService: PreptalkserviceService,

    private router: Router) { }
  searchedResults: any = [];
  ngOnInit(): void {
    // if(this.ecoService.searchedProduct!==''){
    //   this.searchForProduct();
    // }
     console.log(this.ecoService.searchedResults)
  }
  selectedImage: any = "https://m.media-amazon.com/images/I/91p5L+GitZL._SX679_.jpg";
  defaultImg: boolean = false;

  carouselOn(attr: any, i: any) {

    for (let i = 0; i < this.ecoService.searchedResults.length; i++) {
      this.ecoService.searchedResults[i].defaultImg = false;
    }
    if (i + 1 == this.ecoService.searchedResults.length && this.ecoService.pageNumberOff==false) {
      this.searchForProduct();
   }
   attr.defaultImg = true;
  }
  filterwithBrandz(brandz: any) {
    brandz.checked = !brandz.checked
    this.filterBrandsMain()
  }
  filterBrandsMain() {
    this.ecoService.searchedResults = []
    for (let i = 0; i < this.ecoService.brandNames.length; i++) {
      if (this.ecoService.brandNames[i].checked == true) {
        let req: any = {
          "brand": this.ecoService.brandNames[i].brandname
        }
        console.log("weqew",req)
        this.ecoService.filterProjectsearches(req).subscribe((data: any) => {
          this.ecoService.ApiCalling = false;
          if(this.ecoService.onluForLocal==true){
            this.ecoService.searchedResults = data;
          }
          else{
            this.ecoService.searchedResults = this.ecoService.searchedResults.concat(data);
          }
        })
      }
    }

  }

  buyNowpage(req: any) {
    this.ecoService.buyItem = req;
    this.router.navigate(['/ecommerce/buy'])
  }
  pageNumber = 0;
  getSearchedProducts: number = 0;
  searchForProduct() {
    if (this.ecoService.getSearchedProducts == 0) {
      this.ecoService.pageNumber =  this.ecoService.pageNumber+1;
      let req = {
        category:
          this.ecoService.searchedProduct,
        "pageNumber":this.ecoService.pageNumber
      }
      this.ecoService.getSearchedProduct(req).subscribe((data: any) => {
        setTimeout(() => {
          this.ecoService.ApiCalling = false;
        }, 5000);

        if (data.length > 0) {
         
          this.ecoService.getSearchedProducts = 1;
          this.ecoService.searchedResults = [...this.ecoService.searchedResults, ...data];
        }
        this.getFilterBrandz();
      })
    }

  }
  getFilterBrandz() {
    this.ecoService.brandNames = [];
    for (let i = 0; i < this.ecoService.searchedResults.length; i++) {
      this.ecoService.brandNames.push(this.ecoService.searchedResults[i]);
    }
    for (let i = 0; i < this.ecoService.brandNames.length; i++) {
      this.ecoService.brandNames[i].checked = false;
    }
  }

}
