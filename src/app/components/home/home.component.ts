import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  scrollToTarget() {
    const targetElement = document.getElementById('cards');

    if (targetElement) {
      // Smooth scroll to the target section
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
