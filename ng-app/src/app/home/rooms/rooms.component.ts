import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router}   from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  
	goBack() {
	    this.location.back();
	}
}
