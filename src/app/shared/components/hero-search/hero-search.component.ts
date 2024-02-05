import { HeroService } from './../../../core/services/hero.service';
import { Hero } from './../../../core/models/hero.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  @Input() label = '';

  private searchTerm = new Subject<string>();

  @Output() private selected = new EventEmitter<Hero>(); //selected emite pelo output o hero da funct onSelected

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap(term => this.heroService.search(term))
    )
  }

  onSelected(selectedItem: MatAutocompleteSelectedEvent): void {
    this.searchTerm.next(''); // limpa as pesquisas apos interação

    const hero: Hero = selectedItem.option.value;
    this.selected.emit(hero);// ao chamar a function o parametro vai ser $event (sla pq)
  }

  search(term: string): void{
    this.searchTerm.next(term)
  }

}
