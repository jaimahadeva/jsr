import { Component,OnInit} from '@angular/core';
import { PreptalkserviceService } from './preptalkservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  digiQuestions:any=[];
  itwillopen: boolean=false;
  constructor(
    private preptalksservice:PreptalkserviceService,
    private router:Router
     ){

  }
  title = 'preptalksproject';
 ngOnInit(){
  // this.router.navigate(['login']);
    //  this.router.navigate(['ecommerce/home']);
//  this.router.navigate(['portfolio']);

  
 }


// no service calls 
  gotoDigitalPrep(){
    alert("ÿeah it will open now ")
    this.itwillopen=true;
     this.router.navigate(['/learning/home'])
  }
  
}
