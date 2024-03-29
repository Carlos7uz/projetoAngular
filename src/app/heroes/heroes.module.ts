import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class HeroesModule { }
