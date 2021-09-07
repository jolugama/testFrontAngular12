import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {People, ResultPeople,Planets,ResultPlanets,Starships,ResultStarships} from '@interfaces/index'
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
   * @returns retorna observable resultado
   */
  getPeople(): Observable<ResultPeople[]> {
    return this.http.get<People>(this.urlPeople)
    .pipe(
      tap(console.log), //TODO comentar
      switchMap((data: People) => {
        if (data.next?.length > 0) {
          this.urlPeople=data.next;
        }
        this.people = [...this.people,...data.results]
        return of(this.people);
      })
    )
  }


    /**
   * LLama al api https://swapi.dev/api/people, guarda next (proxima url) y resultado
   * @returns retorna observable resultado
   */
     getStartShips(): Observable<ResultStarships[]> {
      return this.http.get<Starships>(this.urlStarships)
      .pipe(
        tap(console.log), //TODO comentar
        switchMap((data: Starships) => {
          if (data.next?.length > 0) {
            this.urlStarships=data.next;
          }
          this.starships = [...this.starships,...data.results]
          return of(this.starships);
        })
      )
    }



      /**
   * LLama al api https://swapi.dev/api/people, guarda next (proxima url) y resultado
   * @returns retorna observable resultado
   */
  getPlanets(): Observable<ResultPlanets[]> {
    return this.http.get<Planets>(this.urlPlanets)
    .pipe(
      tap(console.log), //TODO comentar
      switchMap((data: Planets) => {
        if (data.next?.length > 0) {
          this.urlPlanets=data.next;
        }
        this.planets = [...this.planets,...data.results]
        return of(this.planets);
      })
    )
  }

}
