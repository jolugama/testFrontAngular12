import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {people, ResultPeople} from '@interfaces/index'
import { switchMap, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private url = 'https://swapi.dev/api';
  private urlPeople = `${this.url}/people`;
  private urlStarships = `${this.url}/starships`;
  private urlPlanets = `${this.url}/planets`;


  people: ResultPeople[];
  
  constructor(private http: HttpClient) {
    this.people = [];
  }



  getPeople(): Observable<people[]> {
    return this.http.get<people[]>(this.urlPeople)
    .pipe(
      tap(console.log),
      switchMap((data: people) => {
        if (data.next?.length > 0) {
          this.updateUrlPeople(data.next);
        }
        this.people = [...this.people,...data.results]
        return of(data);
      }),
      tap(console.log),
      tap(()=>{
        console.log('people',this.people)
      })
    )
  }

  updateUrlPeople(nextUrl:string){
    this.urlPeople=nextUrl;
  }
}
