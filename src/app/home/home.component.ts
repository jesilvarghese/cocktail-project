import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router :Router) {

  }



  goToMargarita(){
    this.router.navigate(['/Magarita'])
  }
  goToMojito() {
    alert('No cocktail details are available right now,please try later.')
  }
}
