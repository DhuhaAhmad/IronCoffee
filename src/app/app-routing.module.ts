import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { HomeComponent } from './components/home/home.component';
import { NewCoffeeComponent } from './components/new-coffee/new-coffee.component';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';
import { SingleCoffeeComponent } from './components/single-coffee/single-coffee.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'coffees', component: CoffeesComponent },
  { path: 'random-coffee', component: RandomCoffeeComponent },
  { path: 'new-coffee', component: NewCoffeeComponent },
  { path: 'single-coffee', component: SingleCoffeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
