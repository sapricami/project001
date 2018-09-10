import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare var jquery:any;
declare var $ :any;

/*
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
*/

function bootstrap() {
	var spinner = document.getElementById("spinner");
	spinner.style.display = 'none';
  	platformBrowserDynamic().bootstrapModule(AppModule)
  	.catch(err => console.log(err));

  	//$('body').append('$ WORKS?');

}

if (window['cordova']) {
  	console.log('Angular on Cordova');
  	document.addEventListener('deviceready', () => bootstrap());
} else {
  	console.log('Default Angular');
  	bootstrap();
}