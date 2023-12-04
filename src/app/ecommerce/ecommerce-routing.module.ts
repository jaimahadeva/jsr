import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { EcomcontentComponent } from './ecomcontent/ecomcontent.component';
import { OffersComponent } from './offers/offers.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { SellproductsComponent } from './sellproducts/sellproducts.component';
import { BuynowComponent } from './buynow/buynow.component';
import { CartsComponent } from './carts/carts.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
{ path: 'home', component: EcommerceComponent },
{path:'offers',component:OffersComponent},
{path:'products',component:ProductspageComponent},
{path:'sellproducts',component:SellproductsComponent},
{path:'buy',component:BuynowComponent},
{path:'carts',component:CartsComponent},
{path:'myorders',component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
