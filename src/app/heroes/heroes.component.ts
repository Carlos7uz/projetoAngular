import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from './../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // heroes recebe o modelo do array (vazio)
  selectedHero?: Hero; // selectedHero recebe um Hero ou fica undefined

  // constructor para usar os metodos dos Services hero e message
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ){}

  // inicia vazio e recebe os herois pelo metodo getHeroes
  ngOnInit(): void {
    this.getHeroes();
  }

  //getHeroes utiliza o metod subscribe para emitir os herois listados para o array vazio heroes
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  // function com parametro hero recebendo a interface Hero
  onSelect(hero: Hero): void{
    this.selectedHero = hero; // selctedHero recebe o hero selecionado

    // usa o metodo do service message e adiciona uma message para o heroi selecionado
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
