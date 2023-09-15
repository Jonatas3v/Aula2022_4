import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  valor1: number = 0;
  valor2: number = 0;
  constructor() { }

  ngOnInit() {
  }
  calculo() { 
    alert(this.valor1 + this.valor2) 
  }
}
