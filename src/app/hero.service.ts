import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
	private headers = new Headers({'Content-Type': 'application/json'});

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

	getHero(id: string): Promise<Hero> {
		return this.http.get(`api/heroes/${id}`)
			.toPromise()
			.then(response => response.json() as Hero)
	}

	update (hero: Hero): Promise<Hero> {
		return this.http.put(`api/heroes/${hero._id}`, JSON.stringify(hero), { headers: this.headers })
			.toPromise()
			.then(() => hero)
			.catch(this.handleError);
	}
}
