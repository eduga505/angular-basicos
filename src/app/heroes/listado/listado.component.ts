import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Hulk', 'Tor', 'Ironman'];

  borrarHeroe(){
    this.heroes.shift();
  }

}
