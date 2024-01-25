// Servicos do component heroes

import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  // constructor para obter os metodos do Service messages
  constructor (private messageService: MessageService) {}

  // getHeroes usa Observable para retornar um fluxo de valores com a interface padrao Hero[]
  getHeroes(): Observable<Hero[]> {
    //heroes recebe a lista de herois pelo argumento of(emite separadamente e ordenado os valores de HEROES)
    const heroes = of(HEROES);

    //adiciona uma message que os herois foram pegos
    this.messageService.add('HeroService: fetched heroes');

    // faz com que quando a function getHeroes() for chamada ela retorne os herois que foram adicionados ->
    // a const heroes
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!; // busaca por id
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero); // retorna hero encontrado na busca
  }
}
