
import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../../../core/models/hero.model";
import { HeroService } from "../../../core/services/hero.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component ({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  isEditing = false;

  form = this.fb.group({
    id: [{ value: '', disabled: true }],
    name: ['', Validators.required],
    power: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.getHero();
  }

  getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if(paramId !== 'new'){
      this.isEditing = true;

      const id = Number(paramId);
      this.heroService.getOneHero(id).subscribe((hero) => {
        this.hero = hero;
        this.form.controls['id'].setValue(hero.id);
        this.form.controls['name'].setValue(hero.name);
        this.form.controls['power'].setValue(hero.power);
      });
    }
  }


  goBack(): void {
    this.location.back();
  }

  create(): void {
    const { valid, value } = this.form;

    if(valid) {
      const hero: Hero = {
        name: value.name,
        power: value.power
      } as Hero;

      this.heroService.create(hero).subscribe(() => this.goBack());
    }
  }

  update(): void {
    const { valid, value } = this.form;

    if(valid) {
      const hero: Hero = {
        id: this.hero.id,
        name: value.name,
        power: value.power
      }

      this.heroService.update(hero).subscribe(() => this.goBack());
    }
  }

}
