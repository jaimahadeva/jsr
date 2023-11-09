import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { EcomcontentComponent } from './ecomcontent/ecomcontent.component';
import { OffersComponent } from './offers/offers.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { SellproductsComponent } from './sellproducts/sellproducts.component';

const routes: Routes = [
{ path: 'home', component: EcommerceComponent },
{path:'offers',component:OffersComponent},
{path:'products',component:ProductspageComponent},
{path:'sellproducts',component:SellproductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
