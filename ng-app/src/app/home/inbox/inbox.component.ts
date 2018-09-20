import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router}   from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  
	goBack() {
	    this.location.back();
	}
}
