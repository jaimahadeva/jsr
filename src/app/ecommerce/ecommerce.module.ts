import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { MenuComponent } from './menu/menu.component';
import { EcomcontentComponent } from './ecomcontent/ecomcontent.component';
import { OffersComponent } from './offers/offers.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { SellproductsComponent } from './sellproducts/sellproducts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BuynowComponent } from './buynow/buynow.component';
import { CartsComponent } from './carts/carts.component';
import { OrdersComponent } from './orders/orders.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  declarations: [
    EcommerceComponent,
    MenuComponent,
    EcomcontentComponent,
    OffersComponent,
    ProductspageComponent,
    SellproductsComponent,
    BuynowComponent,
    CartsComponent,
    OrdersComponent,
    SuggestionsComponent,
    
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
     ReactiveFormsModule,
  ]
})
export class EcommerceModule { }
