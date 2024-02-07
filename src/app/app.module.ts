import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';



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
    HttpClientModule,

    //App
    AuthModule,
    CoreModule,
    AppRoutingModule, // add from terminal ng g app-routing --flat --module=app
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
