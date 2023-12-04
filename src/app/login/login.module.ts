import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MenuComponent } from '../menu/menu.component';
import { MenuModule } from '../menu/menu.module';




@NgModule({
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
     
       
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
         MenuModule

       
       
    ]
})
export class LoginModule {}

