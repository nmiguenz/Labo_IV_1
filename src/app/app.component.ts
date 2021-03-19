import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 1 - Edades';
  numero1:number = 0;
  numero2:number = 0;
  suma = 0 ;
  promedio = 0;

  Calcular(){
    if(this.numero1 !=null && this.numero2 !=null){
      this.suma = +this.numero1 + +this.numero2;
      this.promedio = this.suma / 2;
    }
  }

  CleanInput(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.promedio = 0;
    this.suma = 0;
  }
  
}
