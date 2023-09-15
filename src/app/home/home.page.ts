import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navControl:NavController) {}


  exibirGuitarra(){
    this.navControl.navigateForward('guitarra')
  }
  exibirClarinete(){
    this.navControl.navigateForward('clarinete')
  }
  exibirTrombone(){
    this.navControl.navigateForward('trombone')
  }
  exibirViolao(){
    this.navControl.navigateForward('violao')
  }
 
 

}
