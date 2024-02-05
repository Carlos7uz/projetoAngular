import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/services/hero.service';
import { Hero } from '../core/models/hero.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService, private router: Router) { }

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void{
    this.heroService.getAllHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 6));
  }

  onSelected(hero: Hero): void{
    this.router.navigate(['/heroes', hero.id])
  }

}
