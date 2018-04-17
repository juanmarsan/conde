import { Component } from '@angular/core';

@Component({
  selector: 'productos-directive',
  templateUrl: './productos.component.html',
  styleUrls: ['productos.component.scss']
})
export class InfoComponent {
  public title : string = 'Productos';

  public textoContacto : string = 'Puede contactar';


  constructor(){
  }

}
