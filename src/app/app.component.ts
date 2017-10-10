import { Component, OnInit } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  providers: [ HeroService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appx';
  hero: Hero = {
  	id: 1,
  	name: 'Flash'
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor (private heroService: HeroService) {
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes); 
  }

  onSelect(hero: Hero): void {
	  this.selectedHero = hero;
  }
}
