import { Component, OnInit, Inject } from '@angular/core';
import { Router }   from '@angular/router';
import { Location } from '@angular/common';

declare var navigator;
//declare var navigator.app;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  	title = 'chatspot';

  	constructor(private router:Router, private location: Location){
  		
  	}
  	
  	ngOnInit() {
  		this.initCordovaEvents();
  		this.router.navigate(['/login']);
  	}

  	initCordovaEvents() {
  		document.addEventListener('backbutton', this.onBackKeyDown, false);
  	}

  	onBackKeyDown = (e): void => {
  		console.log(this.location.path());
  		//this.router.navigate(['/home']);
  		this.location.back();
  		let path = this.location.path();
  		if (path.includes('/home')||path.includes('/login')) {
  			this.exitAppAndroidOnly();
  		}
    }

    exitAppAndroidOnly() {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        } else {
            window.close();
        }
    }

}
