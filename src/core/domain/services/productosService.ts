
import 'rxjs/add/operator/map';
import 'rxjs/observable/of';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {Producto} from '../models/producto';
import {Variedad} from '../models/variedad';
import {IProductosService} from './contracts/iProductosService';
import {Contacto} from '../models/contacto';

@Injectable()
export class ProductosService implements IProductosService {
  private misProductos: Producto[] =  [];
  private misVariedades: Variedad[] =  [];
  url = 'http://localhost:8888/conde/ver.php';
  urlVariedad = 'http://localhost:8888/conde/variedad.php';
  urlPostContato = 'http://www.web-salva.com/juan/pruebas/sendContacto.php';

  constructor(private http: HttpClient) {}

  getProductos(force?: boolean): Observable<Producto[]> {
    if (this.misProductos.length > 0 || force) {
      return of(this.misProductos);
    } else {
      return this.http.get(this.url).map((response: any) => {
        this.misProductos = response;
        const apiResponse = <Producto[]>response;
        return apiResponse;
      });
    }
  }

  getVariedad(force?: boolean): Observable<Variedad[]> {
    if (this.misVariedades.length > 0 || force) {
      return of(this.misVariedades);
    } else {
      return this.http.get(this.urlVariedad).map((response: any) => {
        this.misVariedades = response;
        const apiResponse = <Variedad[]>response;
        return apiResponse;
      });
    }
  }


  getProducto(i: number): Producto {
    return i >= 0 && this.misProductos[i];
  }

  private extractData(res: any) {
    return res;
  }

  sendContactForm(values: Contacto) {
    console.log(values);
    const body = JSON.stringify(values);
    return this.http.post(this.urlPostContato, body, {}).map(this.extractData);
  }


}
