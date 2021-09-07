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
  buttonPaginationIsDisabled=false;
  buttonPaginationColor='primary';
  
  constructor(private swapiService: SwapiService) { 
    this.startShips=[];
  }

  ngOnInit(): void {
    this.getStartShips(true);
  }

  getStartShips(init?:boolean): void {
    this.swapiService.getStartShips(init)
      .pipe().subscribe(
        (startShips)=>{
          // console.log('startShips',startShips);
          this.startShips=startShips;
        
          if(this.swapiService.isEndPageStartShips()){
            // debugger;
            this.buttonPaginationIsDisabled=true;
            this.buttonPaginationColor='disabled';
          }
          
        }
      );
  }

  clickMorePages(){
    if(!this.buttonPaginationIsDisabled){
      this.getStartShips();
    }
    
  }

}
