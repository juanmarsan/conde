
import {Observable} from 'rxjs/Observable';
import {Producto} from '../../models/producto';
export interface IProductosService {

  getProductos(): Observable<Producto[]>;
  getProducto(i: number): Producto;
}
