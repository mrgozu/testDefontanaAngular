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
  // data:DataOrdenada;
  constructor(private dataService:DataTestService) { 
    // this.data = this.dataService.generarDatos();

  }

  ngOnInit(): void {
    console.log(this.datos)

    for (let item of this.datos.Children){
      // console.log(item)
    }
    // console.log(this.datos.Children)
    // for(let data of this.data.Children ){
    //   console.log(data)
    // }
    
    
  }

}
