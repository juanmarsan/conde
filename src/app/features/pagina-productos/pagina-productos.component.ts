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


  constructor(private productosService: ProductosService, private route: ActivatedRoute) {


    this.route.queryParams
      .subscribe(params => {
        if (+params['variedad']) {
          this.variedadFilter = String(+params['variedad']);
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


  public title = 'Productos';
  public filtrado = 'Todos';
  public tipoVariedad = 'Todos';

  public selected: number;
  public paso = false;

  ngOnInit() {
  }


  filtra(valor) {
     this.filtrado = valor;
    // this.cambia(valor);
    this.paso = true;
  }


  cambia(i: any) {
    if (this.selected === i) {
      if  (this.paso === false) {
        this.selected = -1;
        alert('1');
      }
      this.paso = false;
    } else {
        this.selected = i;
      this.abrirVariedad(i);
      }
  }

  abrirVariedad(valor) {
    this.tipoVariedad = valor;
  }




}
