import { Injectable } from '@angular/core';
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

	getHero(id: string): Promise<Hero> {
		return this.http.get(`api/heroes/${id}`)
			.toPromise()
			.then(response => response.json() as Hero)
	}
}
