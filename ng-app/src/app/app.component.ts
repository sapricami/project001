import { Component, OnInit, Inject } from '@angular/core';
import { Router }   from '@angular/router';
import { Location } from '@angular/common';

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
  		this.router.navigate(['/home']);
  	}

  	initCordovaEvents() {
  		document.addEventListener('backbutton', this.onBackKeyDown, false);
  	}

  	onBackKeyDown = (e): void => {
		console.log(this.location.path());
		//this.router.navigate(['/home']);
		this.location.back();
		/*let path = this.location.path();
		if (path.includes('/learner/learning/container/common-container')) {
			this.util.exitAppAndroidOnly();
		}*/
	}
}
