import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-new-coffee',
  templateUrl: './new-coffee.component.html',
  styleUrls: ['./new-coffee.component.css']
})
export class NewCoffeeComponent {
  coffees: any[] = [];
  name: string = "";
  tagline: string = "";
  description: string = "";
  first_roasted: string = "";
  roaster_tips: string = "";
  strength_level: number = 0;
  contributed_by: string = "";

  constructor(private coffeeService: CoffeeService, private router: Router) { }


  postCoffee(): void {
    const body = {
      name: this.name,
      tagline: this.tagline,
      description: this.description,
      first_roasted: this.first_roasted,
      roaster_tips: this.roaster_tips,
      strength_level: this.strength_level,
      contributed_by: this.contributed_by
    };
    this.coffeeService.postCoffee(body).subscribe({
      next: (data) => {
        console.log('Success!', data);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}

