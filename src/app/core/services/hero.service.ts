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


  getAllHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(
        tap((heroes) =>
          this.log(`fetched ${heroes.length} heroes`)
        )
      );


    //const heroes = of(HEROES);
    //this.log('fetched heroes');
    //return heroes;
  }

  // GET /heroes/id
  getOneHero(id: number): Observable<Hero> {
    return this.http
    .get<Hero>(this.getUrl(id))
    .pipe(
      tap((hero) =>
        this.log(`fetched ${this.descAttributes(hero)}`)
      )
    );

    //const hero = HEROES.find(hero => hero.id === id)!;
    //this.log(`fetched hero id=${id}`);
    //return of(hero);
  }

  // POST /heroes
  create(hero: Hero): Observable<Hero> {
    return this.http
    .post<Hero>(this.heroesUrl, hero)
    .pipe(
      tap((hero) =>
        this.log(`updated ${this.descAttributes(hero)}`)
      )
    );
  }

  // PUT /heroes/id
  update(hero: Hero): Observable<Hero> {
    return this.http
    .put<Hero>(this.getUrl(hero.id), hero)
    .pipe(
      tap((hero) =>
        this.log(`updated ${this.descAttributes(hero)}`)
      )
    );
  }

  //DELETE /hero/id
  delete(hero: Hero): Observable<any> {
    return this.http.delete<any>(this.getUrl(hero.id)).pipe(
      tap(() =>
        this.log(`deleted ${this.descAttributes(hero)}`)
      )
    );
  }

  private descAttributes(hero: Hero): string {
    return `hero id=${hero.id} name=${hero.name} power=${hero.power}`;
  }

  private log(message: string): void {
    this.messageService
    .add(`HeroService: ${message}`)
  }

  private getUrl(id: number): string{
    return `${this.heroesUrl}/${id}`
  }

}
