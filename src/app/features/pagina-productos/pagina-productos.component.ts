import {Component, OnInit} from '@angular/core';
import {ProductosService} from '../../../core/domain/services/productosService';
import {Producto} from '../../../core/domain/models/producto';

@Component({
  selector: 'app-productos-directive',
  templateUrl: './pagina-productos.component.html',
  styleUrls: ['pagina-productos.component.scss']
})

export class ProductosComponent implements OnInit {

  producto: Producto[] = [{
    id: 1,
    title: 'Cabernet',
    idvariedad: '0',
    variedad: 'Uva Blanca',
    description: ' cabernet sauvignon es una de las uvas tintas más conocidas del mundo. Crece en casi todas las grandes zonas vitícolas, en un diverso espectro de climas, desde el valle del Okanagan (Canadá) al valle de la Becá (Líbano). La cabernet sauvignon se hizo famosa por su presencia en el vino de Burdeos, donde es mezclada a menudo con la merlot y con la cabernet franc. Desde Francia, la uva se ha extendido por Europa y por el Nuevo Mundo instalándose en las montañas Santa Cruz de California, el valle de Napa, la bahía Hawkes de Nueva Zelanda, el río Margaret y la región de Coonawarra de Australia, y los valles chilenos del Maipo y de Colchagua. Durante buena parte del siglo XX, fue la uva tinta de vino premium más plantada del mundo, hasta que fue adelantada por la merlot en los años 90.',
    photo: 'cabernet.jpg'
  },
    {
      id: 2,
      title: 'Chardonnay',
      idvariedad: '1',
      variedad: 'Uva Negra',
      description: ' Chardonnay NEGRO es una de las uvas tintas más conocidas del mundo. Crece en casi todas las grandes zonas vitícolas, en un diverso espectro de climas, desde el valle del Okanagan (Canadá) al valle de la Becá (Líbano). La cabernet sauvignon se hizo famosa por su presencia en el vino de Burdeos, donde es mezclada a menudo con la merlot y con la cabernet franc. Desde Francia, la uva se ha extendido por Europa y por el Nuevo Mundo instalándose en las montañas Santa Cruz de California, el valle de Napa, la bahía Hawkes de Nueva Zelanda, el río Margaret y la región de Coonawarra de Australia, y los valles chilenos del Maipo y de Colchagua. Durante buena parte del siglo XX, fue la uva tinta de vino premium más plantada del mundo, hasta que fue adelantada por la merlot en los años 90.',
      photo: 'cabernet.jpg'
    },
    {
      id: 2,
      title: 'Merlot',
      idvariedad: '1',
      variedad: 'Uva Tinta',
      description: ' Merlot NEGRO es una de las uvas tintas más conocidas del mundo. Crece en casi todas las grandes zonas vitícolas, en un diverso espectro de climas, desde el valle del Okanagan (Canadá) al valle de la Becá (Líbano). La cabernet sauvignon se hizo famosa por su presencia en el vino de Burdeos, donde es mezclada a menudo con la merlot y con la cabernet franc. Desde Francia, la uva se ha extendido por Europa y por el Nuevo Mundo instalándose en las montañas Santa Cruz de California, el valle de Napa, la bahía Hawkes de Nueva Zelanda, el río Margaret y la región de Coonawarra de Australia, y los valles chilenos del Maipo y de Colchagua. Durante buena parte del siglo XX, fue la uva tinta de vino premium más plantada del mundo, hasta que fue adelantada por la merlot en los años 90.',
      photo: 'cabernet.jpg'
    }
  ];

  public title : string = 'Productos';
  public productos: any;
  menus: string[];
  public textoContacto : string = 'Puede contactar';

  constructor(private productosService: ProductosService) {
    this.menus = ['Cabernet', 'Chardonnay' , 'Merlot'];

    this.productosService.getProductos().subscribe(response => {
      this.productos = response;
      console.log(this.productos);
    });

  }

  ngOnInit() {
  }

}


