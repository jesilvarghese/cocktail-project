import { Component, OnInit, ViewChild } from '@angular/core';
import {CocktailService} from '../cocktail.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

export interface CockTail {
  version: string;
  position: number;
  code: string;
  codeType: string;
  Description:string
}

@Component({
  selector: 'app-magarita',
  templateUrl: './magarita.component.html',
  styleUrls: ['./magarita.component.css']
})
export class MagaritaComponent{
data :any
selectedCategory:any;
  @ViewChild(MatSort)
  sort!: MatSort;
  dataSource = new MatTableDataSource<CockTail>;
  
  columnsToDisplay = ['strAlcoholic', 'strCategory', 'strDrink', 'strGlass'];


  constructor (private service: CocktailService,private router :Router,private route: ActivatedRoute) {
    this.service.getInfo().subscribe(data =>{
      this.data = data;
      this.dataSource = this.data.drinks;
      this.dataSource.data = this.data.drinks;
    })
  }

  ingredientPage (){
    this.router.navigate(['ingredient'],{relativeTo: this.route})
  }
  applyFilter(event:Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }
  
}
