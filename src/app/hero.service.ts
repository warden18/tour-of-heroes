import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getHeroes()), 2000)
		});
	}

	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.id === id));
	}
}
