import { Component, OnInit, Input } from '@angular/core';

export interface Data {
  id : string;
  name : string;
}


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() data;

  array: Data [] = [];

  constructor() { }

  ngOnInit(): void {
  }
  //LLena el array que nos servira para la comprobación
  fillArray(item){
    if(this.array.length<2){
      this.array.push(item);
      console.log(this.array)
      if(this.array.length ==2){
        this.check(this.array)
      }
    }
  }
  //Comprueba si los dotos son correctos
  check(item){
    if(item[0] == item[1]){
      let newArray = this.data.filter(e =>e.id !==item[0].id)
      console.log(newArray)
      this.data = newArray;
      this.array = [];
    }else{
      this.array = [];
    }
  }

}
