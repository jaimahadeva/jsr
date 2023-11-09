import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreptalkserviceService } from 'src/app/preptalkservice.service';

@Component({
  selector: 'app-ecomcontent',
  templateUrl: './ecomcontent.component.html',
  styleUrls: ['./ecomcontent.component.css']
})
export class EcomcontentComponent implements OnInit {

  constructor(public preptalkservices:PreptalkserviceService,
    private router:Router) { }

  ngOnInit(): void {
  }
  gotoProdcts(){
   this.router.navigate(['/ecommerce/products'])
  }

}
