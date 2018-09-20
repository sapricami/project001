import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router}   from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  
	goBack() {
	    this.location.back();
	}
}
