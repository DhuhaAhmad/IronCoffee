import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoffeesComponent } from './coffees/coffees.component';
import { RandomCoffeeComponent } from './random-coffee/random-coffee.component';
import { NewCoffeeComponent } from './new-coffee/new-coffee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coffees', component: CoffeesComponent },
  { path: 'random-coffee', component: RandomCoffeeComponent },
  { path: 'new-coffee', component: NewCoffeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
