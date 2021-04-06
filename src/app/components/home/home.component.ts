import { Component, OnInit } from '@angular/core';
import { DataTestService } from '../../services/data-test.service';
import { DataOrdenada } from '../../models/dataTest.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  data:DataOrdenada;
  constructor(private dataService:DataTestService) { }

  ngOnInit(): void {
    this.data = this.dataService.generarDatos();
    console.log(this.data);
  }

}
