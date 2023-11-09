import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sellproducts',
  templateUrl: './sellproducts.component.html',
  styleUrls: ['./sellproducts.component.css']
})
export class SellproductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  divId:any='OffersCard';
  slide(direction:any,divId:any){
    let container:any=document.getElementById(divId)
    let scrollcompleted=0;
    var slideWar=setInterval (function(){
      if(direction=='left'){
        container.scrollLeft-=10;
      }
      else {
        container.scrollLeft+=10;
      }
      scrollcompleted+=10;
      if(scrollcompleted>400){
        window.clearInterval(slideWar);
      }
    },10)
   

  }

}
