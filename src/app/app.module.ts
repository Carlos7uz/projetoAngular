
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //@angular
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    //Feature
    DashboardModule,
    HeroesModule,

    //App
    CoreModule,
    AppRoutingModule, // add from terminal ng g app-routing --flat --module=app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
