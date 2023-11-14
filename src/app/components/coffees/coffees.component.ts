import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee.model';
import { CoffeeService } from 'src/app/services/coffee.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

  searchInput$ = new Subject<string>();
  searchQuery: string = '';
  coffees: Coffee[] = [];
  p: number = 1; // Current page
  itemsPerPage: number = 3; // Items per page

  constructor(private coffeeService: CoffeeService){
    this.searchInput$
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string) => this.coffeeService.searchCoffees(query))
    )
    .subscribe((result) => {
      this.coffees=result;
    });
  }

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
