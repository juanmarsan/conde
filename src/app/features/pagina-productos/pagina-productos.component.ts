import { Component } from '@angular/core';
import {ProductosService} from '../../../core/domain/services/productosService';

@Component({
  selector: 'app-productos-directive',
  templateUrl: './pagina-productos.component.html',
  styleUrls: ['pagina-productos.component.scss']
})
export class ProductosComponent {
  public title : string = 'Productos';
  public productos: any;

  public textoContacto : string = 'Puede contactar';


  constructor(private productosService: ProductosService) {


    this.productosService.getProductos().subscribe(response => {
      this.productos = response;
      console.log(this.productos);
    });

  }

}


