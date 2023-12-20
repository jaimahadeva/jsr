import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EcommerceModule } from '../ecommerce/ecommerce.module';
import { BuynowComponent } from '../ecommerce/buynow/buynow.component';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  constructor( public preptalkService:BuynowComponent){}
    ngOnInit(): void {
      
        this.preptalkService.ngOnInit()
    }
  
}
