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

	update(hero: Hero): Promise<Hero> {
		return this.http.put(`api/heroes/${hero._id}`, hero)
			.toPromise()
			.then(() => hero)
			.catch(this.handleError);
	}

	create(name: string, index: number): Promise<Hero> {
		return this.http.post('api/heroes', { name: name, index: index })
			.toPromise()
			.then(res => res.json() as Hero)
			.catch(this.handleError)
	}

	delete(id: string): Promise<void> {
		return this.http.delete(`api/heroes/${id}`)
			.toPromise()
			.then(() => null)
			.catch(this.handleError)
	}
}
