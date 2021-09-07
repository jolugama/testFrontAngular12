import { Component, OnInit } from '@angular/core';
import { ResultStarships } from '@interfaces/starships';
import { SwapiService } from '@services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  startShips:ResultStarships [];
  constructor(private swapiService: SwapiService) { 
    this.startShips=[];
  }

  ngOnInit(): void {
    this.getStartShips();
  }

  getStartShips(): void {
    this.swapiService.getStartShips()
      .pipe().subscribe(
        (startShips)=>{
          console.log('startShips',startShips);
          this.startShips=startShips;
        }
      );
  }

}
