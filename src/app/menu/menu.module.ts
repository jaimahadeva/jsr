import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
    declarations: [
      MenuComponent,
    ],
    exports: [
        MenuComponent,
    
    ],
    imports: [
        CommonModule,
        MenuRoutingModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule
       
  
    ]
})
export class MenuModule { }
