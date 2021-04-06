import { Injectable } from '@angular/core';
import { DataOriginal, DataOrdenada } from '../models/dataTest.model';

@Injectable({
  providedIn: 'root',
})
export class DataTestService {
  datos:DataOriginal[] = [
      { ID: '1', Name: 'ukaryota', Parent: 0 },
      { ID: '2', Name: 'rchaea', Parent: 0 },
      { ID: '3', Name: 'acteria', Parent: 0 },
      { ID: '4', Name: 'uryarchaeota', Parent: 2 },
      { ID: '5', Name: 'renarchaeota', Parent: 2 },
      { ID: '6', Name: 'orarchaeota', Parent: 2 },
      { ID: '7', Name: 'occals', Parent: 3 },
      { ID: '8', Name: 'acilus', Parent: 3 },
      { ID: '9', Name: 'pirillum', Parent: 3 },
      { ID: '10', Name: 'Vibrio', Parent: 3 },
      { ID: '11', Name: 'Plants', Parent: 1 },
      { ID: '12', Name: 'Animals', Parent: 1 },
      { ID: '13', Name: 'Fungi', Parent: 1 },
      { ID: '14', Name: 'Protista', Parent: 1 },
      { ID: '15', Name: 'Nonvascular', Parent: 11 },
      { ID: '16', Name: 'Vascular', Parent: 11 },
      { ID: '17', Name: 'Seedless', Parent: 16 },
      { ID: '18', Name: 'With seed', Parent: 16 },
      { ID: '19', Name: 'Gymnosperm', Parent: 18 },
      { ID: '20', Name: 'Anglosperm', Parent: 18 },
      { ID: '21', Name: 'Basidiomycetes', Parent: 13 },
      { ID: '22', Name: 'Zygomicetes', Parent: 13 },
      { ID: '23', Name: 'Ascomycetes', Parent: 13 },
      { ID: '25', Name: 'Cnidarians', Parent: 12 },
      { ID: '26', Name: 'Bilateral', Parent: 12 },
      { ID: '27', Name: 'Arthopods', Parent: 26 },
      { ID: '28', Name: 'Vertebrates', Parent: 26 },
      { ID: '29', Name: 'Mollusks', Parent: 26 },
      { ID: '30', Name: 'Crustaceans', Parent: 27 },
      { ID: '31', Name: 'Arachnids', Parent: 27 },
      { ID: '32', Name: 'Myriapods', Parent: 27 },
      { ID: '33', Name: 'Insects', Parent: 27 },
      { ID: '34', Name: 'Cartilaginous Fish', Parent: 28 },
      { ID: '35', Name: 'Tetrapods', Parent: 28 },
      { ID: '36', Name: 'Bony Fish', Parent: 28 },
      { ID: '37', Name: 'Amphibians', Parent: 35 },
      { ID: '38', Name: 'Amniotes', Parent: 35 },
      { ID: '39', Name: 'Birds and  Reptiles', Parent: 38 },
      { ID: '40', Name: 'Mammals', Parent: 38 },
      { ID: '41', Name: 'Placentals', Parent: 40 },
      { ID: '42', Name: 'Marsupials', Parent: 40 },
      { ID: '43', Name: 'Monotremes', Parent: 40 },
      { ID: '44', Name: 'Turtles', Parent: 39 },
      { ID: '45', Name: 'Lizards', Parent: 39 },
      { ID: '46', Name: 'Snakes', Parent: 39 },
    ];
  

  constructor() {}

  insertarDato(dato:DataOriginal,nodos:DataOrdenada){

    if(dato.Parent.toString()==nodos.ID){
      nodos.Children.push({ID:dato.ID,Name:dato.Name,Children:[]})
      return nodos;
    }else{
      if(nodos.Children.length != 0){
        for(let children of nodos.Children){
          this.insertarDato(dato,children);
        }
      }
    }
  }
   generarDatos():DataOrdenada{

     let datosParent:DataOriginal[] = new Array(...this.datos) ; 
     datosParent = datosParent.sort((a,b)=>a['Parent']-b['Parent']) //Se ordena de menor a mayor los padres, asi se previene que no exista un padre 
     let nodos = new DataOrdenada('0','Raiz',[]); //Se inicializa una 'raiz' para el arbol de informacion

    for(let dato of datosParent){
      this.insertarDato(dato,nodos);      
    }
    return nodos;

   }

}
