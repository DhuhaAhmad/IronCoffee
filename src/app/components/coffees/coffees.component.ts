import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee.model';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

  coffees: Coffee[] = [];
  p: number = 1; // Current page
  itemsPerPage: number = 10; // Items per page

  constructor(private coffeeService: CoffeeService){}

  ngOnInit(): void {
    this.getCoffees();
  }

  getCoffees(): void{
    this.coffeeService.getAllCoffees().subscribe({
      next: (data) => {
        console.log(data);
        this.coffees = data;
        console.log(this.coffees);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onPageChange(pageNumber: number): void {this.p = pageNumber; }
}
