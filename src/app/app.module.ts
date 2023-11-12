import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewCoffeeComponent } from './components/new-coffee/new-coffee.component';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';
import { SingleCoffeeComponent } from './components/single-coffee/single-coffee.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoffeesComponent,
    RandomCoffeeComponent,
    NewCoffeeComponent,
    MenuComponent,
    FooterComponent,
    SingleCoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
