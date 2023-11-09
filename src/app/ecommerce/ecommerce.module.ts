import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { MenuComponent } from './menu/menu.component';
import { EcomcontentComponent } from './ecomcontent/ecomcontent.component';
import { OffersComponent } from './offers/offers.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { SellproductsComponent } from './sellproducts/sellproducts.component';


@NgModule({
  declarations: [
    EcommerceComponent,
    MenuComponent,
    EcomcontentComponent,
    OffersComponent,
    ProductspageComponent,
    SellproductsComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,

  ]
})
export class EcommerceModule { }
