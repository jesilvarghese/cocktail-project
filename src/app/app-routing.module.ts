import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MojitoComponent } from './mojito/mojito.component';
import { MagaritaComponent } from './magarita/magarita.component';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'Mojito', component: MojitoComponent },
      { path: 'home', component: HomeComponent },
      { path: 'Magarita',
        children: [
          { path : '', pathMatch:'full', component: MagaritaComponent},
          {path:'ingredient', component: IngredientsComponent} 
        ]
      },
      { path: '**', redirectTo: 'home' }
    ])
  ]
})
export class AppRoutingModule { }
