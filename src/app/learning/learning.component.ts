import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {


  constructor(private router:Router,
    ) { }

  ngOnInit(): void {
 
  }
  gotodigitalAngular(){
this.router.navigate(['/learning/digitalpreparation'])
  }

}
