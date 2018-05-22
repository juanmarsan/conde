import { Component } from '@angular/core';

@Component({
  selector: 'app-productos-directive',
  templateUrl: './pagina-productos.component.html',
  styleUrls: ['pagina-productos.component.scss']
})
export class ProductosComponent {
  public title : string = 'Productos';

  public textoContacto : string = 'Puede contactar';


  constructor(){
  }

}


