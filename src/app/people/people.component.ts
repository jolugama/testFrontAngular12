import { Component, OnInit } from '@angular/core';
import { ResultPeople } from '@interfaces/people';
import { SwapiService } from '@services/swapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people:ResultPeople [];
  buttonPaginationIsDisabled=false;
  buttonPaginationColor='primary';
  
  constructor(private swapiService: SwapiService) { 
    this.people=[];
  }

  ngOnInit(): void {
    this.getPeople(true);
  }

  getPeople(init?:boolean): void {
    this.swapiService.getPeople(init)
      .pipe().subscribe(
        (people)=>{
          console.log('people',people);
          this.people=people;
        
          if(this.swapiService.isEndPagePeople()){
            this.buttonPaginationIsDisabled=true;
            this.buttonPaginationColor='disabled';
          }
          
        }
      );
  }

  clickMorePages(){
    if(!this.buttonPaginationIsDisabled){
      this.getPeople();
    }
    
  }

}
