import { Component, OnInit } from '@angular/core';

export interface Data {
  id : string;
  name : string;
}

const data : Data [] = [
  {id:'Germany', name: 'Berlin'},
  {id: 'Azerbaijan', name: 'Baku'},
  {id: 'Canada', name: 'Toronto'}
]

@Component({
  selector: 'app-matching-game',
  templateUrl: './matching-game.component.html',
  styleUrls: ['./matching-game.component.scss']
})
export class MatchingGameComponent implements OnInit {
  dataSource = data;


  constructor() { }

  ngOnInit(): void {
  }



}
