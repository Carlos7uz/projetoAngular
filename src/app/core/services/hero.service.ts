// Servicos do component heroes

import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesUrl = 'api/heroes';



  // constructor para obter os metodos do Service messages
  constructor (
    private http: HttpClient,
    private messageService: MessageService
  ) {}


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)


    //const heroes = of(HEROES);
    //this.log('fetched heroes');
    //return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    this.log(`fetched hero id=${id}`);
    return of(hero);
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)
  }

}
