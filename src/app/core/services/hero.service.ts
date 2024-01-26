// Servicos do component heroes

import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
//import { HEROES } from './mock-heroes'
import { Observable, tap /*of*/ } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl = `${environment.baseUrl}/heroes`;

  // constructor para obter os metodos do Service messages
  constructor (
    private http: HttpClient,
    private messageService: MessageService
  ) {}


  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length} heroes`)));


    //const heroes = of(HEROES);
    //this.log('fetched heroes');
    //return heroes;
  }

  // GET /heroes/id
  getHero(id: number): Observable<Hero> {
    return this.http
    .get<Hero>(`${this.heroesUrl}/${id}`)
    .pipe(tap((hero) => this.log(`fetched hero id=${id} name=${hero.name} power=${hero.power}`)));

    //const hero = HEROES.find(hero => hero.id === id)!;
    //this.log(`fetched hero id=${id}`);
    //return of(hero);
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)
  }

}
