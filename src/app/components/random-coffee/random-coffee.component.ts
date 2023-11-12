import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/models/coffee.model';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-random-coffee',
  templateUrl: './random-coffee.component.html',
  styleUrls: ['./random-coffee.component.css']
})
export class RandomCoffeeComponent implements OnInit{

  coffee:Coffee | null =null

  constructor(private coffeeService:CoffeeService){}

  ngOnInit(): void {
      this.coffeeService. fetchRandomCoffee().subscribe({
        next:data=>{
          this.coffee = data
          console.log(this.coffee)

        },
        error:err=>console.log(err)
      })
  }

}
