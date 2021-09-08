import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { People, ResultPeople, Planets, ResultPlanets, Starships, ResultStarships } from '@interfaces/index'
import { map, switchMap, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private url = 'https://swapi.dev/api';
  private urlPeople = `${this.url}/people`;
  private urlStarships = `${this.url}/starships`;
  private urlPlanets = `${this.url}/planets`;


  people: ResultPeople[];
  starships: ResultStarships[];
  planets: ResultPlanets[];

  constructor(private http: HttpClient) {
    this.people = [];
    this.starships = [];
    this.planets = [];
  }


  /**
   * LLama al api https://swapi.dev/api/people, guarda next (proxima url) y resultado
   * @param init para incluirlo en onInit y que no pagine de nuevo si ya tiene una
   * @returns retorna observable resultado
   */
   getPeople(init?: boolean): Observable<ResultPeople[]> {
    if ((init && this.people.length > 0) || this.urlPeople === '') return of(this.people);

    return this.http.get<People>(this.urlPeople)
      .pipe(
        // tap(console.log), //TODO comentar
        switchMap((data: People) => {
          if (data.next === null) {
            this.urlPeople = '';
          } else {
            this.urlPeople = data.next;
          }
          this.people = [...this.people, ...data.results]
          return of(this.people);
        })
      )
  }

  /**
   * 
   * @returns boolean  si es fin de página
   */
  isEndPagePeople() {
    return this.urlPeople === '' ? true : false;
  }


  /**
   * LLama al api https://swapi.dev/api/startShip, guarda next (proxima url) y resultado
   * @param init para incluirlo en onInit y que no pagine de nuevo si ya tiene una
   * @returns retorna observable resultado
   */
  getStartShips(init?: boolean): Observable<ResultStarships[]> {
    if ((init && this.starships.length > 0) || this.urlStarships === '') return of(this.starships);

    return this.http.get<Starships>(this.urlStarships)
      .pipe(
        // tap(console.log), //TODO comentar
        switchMap((data: Starships) => {
          if (data.next === null) {
            this.urlStarships = '';
          } else {
            this.urlStarships = data.next;
          }
          this.starships = [...this.starships, ...data.results]
          return of(this.starships);
        })
      )
  }

    /**
   * 
   * @returns boolean  si es fin de página
   */
  isEndPageStartShips() {
    return this.urlStarships === '' ? true : false;
  }



  /**
   * LLama al api https://swapi.dev/api/planets, guarda next (proxima url) y resultado
   * @param init para incluirlo en onInit y que no pagine de nuevo si ya tiene una
   * @returns retorna observable resultado
   */
   getPlanets(init?: boolean): Observable<ResultPlanets[]> {
    if ((init && this.planets.length > 0) || this.urlPlanets === '') return of(this.planets);

    return this.http.get<Planets>(this.urlPlanets)
      .pipe(
        // tap(console.log), //TODO comentar
        switchMap((data: Planets) => {
          if (data.next === null) {
            this.urlPlanets = '';
          } else {
            this.urlPlanets = data.next;
          }
          this.planets = [...this.planets, ...data.results]
          return of(this.planets);
        })
      )
  }

  /**
   * 
   * @returns boolean  si es fin de página
   */
  isEndPagePlanets() {
    return this.urlPlanets === '' ? true : false;
  }

}
