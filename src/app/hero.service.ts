import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
	constructor(private http: Http){}

	getHeroes(): Promise<Hero[]> {
		return this.http.get('api/heroes')
			.toPromise()
			.then(response => response.json() as Hero[])
			.catch(this.handleError)
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

	getHero(heroId: number): Promise<Hero> {
		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.heroId === heroId));
	}
}
