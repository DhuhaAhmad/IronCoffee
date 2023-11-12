import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CoffeeService {
  private readonly API_URL = "https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees";

  constructor(private http: HttpClient) { }

  getAllCoffees(): Observable<any>{
    return this.http.get<any>(this.API_URL);
  }
}
