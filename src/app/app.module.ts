import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { AboutComponent } from './about/about.component';
import { NumbersComponent } from './numbers/numbers.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: PrincipalComponent},
        {path: 'about', component: AboutComponent},
        {path: 'numbers', component: NumbersComponent}
      ]
    )
  ],
  declarations: [ AppComponent, NavbarComponent, PrincipalComponent, AboutComponent, NumbersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }