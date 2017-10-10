import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		console.log(123);
		return Promise.resolve(HEROES);
	}
}
