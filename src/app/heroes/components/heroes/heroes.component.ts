import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'power']
  heroes: Hero[] = []; // heroes recebe o modelo do array (vazio)

  // constructor para usar os metodos dos Services hero e message
  constructor(
    private heroService: HeroService
    ){}

  // inicia vazio e recebe os herois pelo metodo getHeroes
  ngOnInit(): void {
    this.getHeroes();
  }

  //getHeroes utiliza o metod subscribe para emitir os herois listados para o array vazio heroes
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }


}
