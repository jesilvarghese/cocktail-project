import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktail-project';
  isHomePage: any ;

  constructor( private route :Router) {
    this.route.events.subscribe(route =>{
      if(route instanceof NavigationEnd){
        if(route.url === '/') {
            this.isHomePage = true;
        } else {
            this.isHomePage = false;
        }
      }
    });
  }
}
