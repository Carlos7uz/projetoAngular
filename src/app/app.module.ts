
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; // add uma toolbar para ser usada na interface html
import {MatButtonModule} from '@angular/material/button'; // add um button para ser usado na interface html
import {MatIconModule} from '@angular/material/icon'; // add um icon para ser usado na interface html
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent, // add component heroes
    HeroDetailComponent, // add component hero details
    MessagesComponent, // add component messages
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule, // add from materials
    MatButtonModule, // add from materials
    MatIconModule, // add from materials
    MatCardModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatTooltipModule,
    AppRoutingModule // add from terminal ng g app-routing --flat --module=app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
