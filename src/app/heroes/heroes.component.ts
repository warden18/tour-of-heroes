import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	hero: Hero = {
  	heroId: 1,
  	name: 'Flash'
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes); 
  }

  onSelect(hero: Hero): void {
	  this.selectedHero = hero;
  }

  goToDetail(): void {
    this.router.navigate([ 'detail', this.selectedHero.heroId ]);
  }
}
