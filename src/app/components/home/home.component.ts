import { Component, Input, OnInit } from '@angular/core';
import { DataTestService } from '../../services/data-test.service';
import { DataOrdenada } from '../../models/dataTest.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  @Input() datos:DataOrdenada =this.dataService.generarDatos();
  
  constructor(private dataService:DataTestService) { }

  ngOnInit(): void {
    console.log(this.datos)

  }

}
