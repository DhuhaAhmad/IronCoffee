import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-single-coffee',
  templateUrl: './single-coffee.component.html',
  styleUrls: ['./single-coffee.component.css']
})
export class SingleCoffeeComponent implements OnInit {
  coffee: any = {};

  coffee_id: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private coffeeService: CoffeeService

  ) {

  }

  ngOnInit(): void {
    this.coffee_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Coffee id is ", this.coffee_id);

    this.coffeeService.getCoffeeById(this.coffee_id).subscribe({
      next: (data) => {
        this.coffee = data;
      },
      error: (error) => {
        console.log(error);
      }
    })

  }
}
