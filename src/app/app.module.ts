import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { MojitoComponent } from './mojito/mojito.component';
import { MagaritaComponent } from './magarita/magarita.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { IngredientsComponent } from './ingredients/ingredients.component'

@NgModule({
  declarations: [
    AppComponent,
    MojitoComponent,
    MagaritaComponent,
    HomeComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
