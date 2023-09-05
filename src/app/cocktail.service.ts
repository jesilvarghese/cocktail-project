import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita";

  constructor(private http:HttpClient) { }


  getInfo(){
    return this.http.get(this.url);
  }

}
