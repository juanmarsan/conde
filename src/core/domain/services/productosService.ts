
import 'rxjs/add/operator/map';
import 'rxjs/observable/of';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {Producto} from '../models/producto';
import {IProductosService} from './contracts/iProductosService';
import {Contacto} from '../models/contacto';

@Injectable()
export class ProductosService implements IProductosService {
  private misProductos: Producto[] =  [];
  url = 'http://www.web-salva.com/juan/pruebas/verEmpresa.php';

  urlPostContato: string = 'http://www.web-salva.com/juan/pruebas/sendContacto.php';

  constructor(private http: HttpClient) {}

  getProductos(force?:boolean): Observable<Producto[]> {
    if(this.misProductos.length > 0 || force)
      return of(this.misProductos);
    return this.http.get(this.url).map((response: any) => {
      this.misProductos = response;
      const apiResponse = <Producto[]>response;
      return apiResponse;
    });
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
