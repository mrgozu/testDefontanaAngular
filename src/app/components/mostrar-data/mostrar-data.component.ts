import { Component, OnInit, Input } from '@angular/core';

import { DataOrdenada } from '../../models/dataTest.model';

@Component({
  selector: 'app-mostrar-data',
  templateUrl: './mostrar-data.component.html',
  styles: [
  ]
})
export class MostrarDataComponent implements OnInit {
  @Input() ID:string;
  @Input() Name:string;
  @Input() Children:DataOrdenada[];
  constructor() { }

  ngOnInit(): void {
  console.log(this.ID);
  console.log();
  
 
  }

}
