import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';


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
    this.getStartShips();
    this.getPlanets();
    setTimeout(() => {
      this.getPeople();
      this.getStartShips();
      this.getPlanets();
    }, 10000);
  }

  getPeople(): void {
    this.swapiService.getPeople()
      .pipe().subscribe(
        (people)=>{
          console.log('people',people);
        }
      );
  }

  getStartShips(): void {
    this.swapiService.getStartShips()
      .pipe().subscribe(
        (startShips)=>{
          console.log('startShips',startShips);
        }
      );
  }

  getPlanets(): void {
    this.swapiService.getPlanets()
      .pipe().subscribe(
        (planets)=>{
          console.log('planets',planets);
        }
      );
  }

}
