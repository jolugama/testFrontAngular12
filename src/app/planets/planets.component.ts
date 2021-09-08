import { Component, OnInit } from '@angular/core';
import { ResultPlanets } from '@interfaces/planets';
import { SwapiService } from '@services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets:ResultPlanets [];
  buttonPaginationIsDisabled=false;
  buttonPaginationColor='primary';
  
  constructor(private swapiService: SwapiService) { 
    this.planets=[];
  }

  ngOnInit(): void {
    this.getPlanets(true);
  }

  getPlanets(init?:boolean): void {
    this.swapiService.getPlanets(init)
      .pipe().subscribe(
        (planets)=>{
          console.log('planets',planets);
          this.planets=planets;
        
          if(this.swapiService.isEndPagePlanets()){
            this.buttonPaginationIsDisabled=true;
            this.buttonPaginationColor='disabled';
          }
          
        }
      );
  }

  clickMorePages(){
    if(!this.buttonPaginationIsDisabled){
      this.getPlanets();
    }
    
  }

}
