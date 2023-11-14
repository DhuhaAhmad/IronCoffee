import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  constructor(private router:Router){}


  // ngOnInit(): void {
  //  this.isCoffeesRouter()
  // }
  isCoffeesRouter():boolean{
    console.log(this.router.url)
    return this.router.url ==="/coffees"
    
  }
}
