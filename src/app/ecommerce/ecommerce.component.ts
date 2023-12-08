import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  constructor(private router:Router,
    public service:ServicesService) { }

  ngOnInit(): void {
   
  }

}
