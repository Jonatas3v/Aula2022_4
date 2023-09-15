import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string = "Jonatas";
  idade: number = 19


  constructor(private navControler: NavController) { }

  sobre() {
    this.navControler.navigateForward("sobre")
  }
  calculadora(){
    this.navControler.navigateForward("calculadora")
  }


}
