import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import { SwapiService } from '../services/swapi.service';
import { people, ResultPeople } from '@interfaces/index';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  constructor(private swapiService: SwapiService) {
   
  }

  ngOnInit(): void {
    this.getPeople();
    setTimeout(() => {
      this.getPeople();
    }, 10000);
  }

  getPeople(): void {
    this.swapiService.getPeople()
      .pipe().subscribe();
  }

  // getPeople(): void {
  //   this.swapiService.getPeople()
  //     .pipe(
  //       tap(console.log),
  //       switchMap((data: people) => {
  //         if (data.next?.length > 0) {
  //           this.swapiService.updateUrlPeople(data.next);
  //         }
  //         this.people = [...this.people,...data.results]
  //         return of(data);
  //       }),
  //       tap(console.log),
  //       tap(()=>{
  //         console.log('people',this.people)
  //       }),
  //     ).subscribe();
  // }

}
