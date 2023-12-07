import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // no service calls 
  gotodigitalAngular() {
    this.router.navigate(['/learning/digitalpreparation'])
  }
  gotoHome(){
    this.router.navigate([''])
  }
  gotoEcomemrce(){
    this.router.navigate(['/ecommerce/home'])
  }

}
