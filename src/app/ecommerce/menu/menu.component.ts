import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreptalkserviceService } from 'src/app/preptalkservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private preptalkService: PreptalkserviceService, private route: Router) { }
  username: any
  ngOnInit(): void {
    this.username = this.preptalkService.userName

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

}
