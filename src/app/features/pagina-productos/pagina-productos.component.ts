import {Component, OnInit} from '@angular/core';
import {ProductosService} from '../../../core/domain/services/productosService';
import {Producto} from '../../../core/domain/models/producto';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-productos-directive',
  templateUrl: './pagina-productos.component.html',
  styleUrls: ['pagina-productos.component.scss']
})

export class ProductosComponent implements OnInit {


  public title = 'Productos';
  public productos: any;
  public variedades: any;

  public ordenarTipo: any;
  public variedadFilter: string;

  public categoria = '';
  public filtrado = 'Todos';
  public pruebas = 'Mostrar';
  mostrar = 'Mostrar';
  ocultar = 'Ocultar';
  public valor = 0;

  showSubmenu = false;

  public estilo = '\'background\':\'blue\'';


  constructor(private productosService: ProductosService, private route: ActivatedRoute) {




this.route.queryParams
  .subscribe(params => {
    if (+params['variedad']) {
      this.variedadFilter =  String(+params['variedad']);
    }
  });



    this.productosService.getProductos().subscribe(response => {
      this.productos = response;
      console.log(this.productos);
    });

    this.productosService.getVariedad().subscribe(response => {
      this.variedades = response;
      console.log(this.variedades);
    });

  }

  ngOnInit() {
  }


  prueba() {
    if (this.valor === 0) {
      this.valor = 1;
    } else {
      this.valor = 0;
    }
  }

  cambias(valor) {
    console.log(valor.className);
    if (valor.className == 'product') {
      valor.className = 'product1';
    } else {
      valor.className = 'product';
    }
    console.log(valor.className);
  }




  cambia(valor) {
    if (this.categoria !== valor) {
      this.categoria = 'acierto' + valor;
    }

  }

  /*cambia(valor) {
    if (this.categoria !== valor) {
      this.categoria = `clase${valor}`;
      this.algo0 = 'visible';
    }

  }*/

  filtra(valor) {
    this.filtrado = valor;
   this.cambia(valor);
    }

  filterName(event: any) {
    this.ordenarTipo = event;
  }

}


