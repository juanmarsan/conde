import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-directive',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['pagina-inicio.component.scss']
})
export class InicioComponent {
  public title = 'Nuestros Productos';
  public quien = 'Nuestro Equipo';
  public equipo = 'En Viveros R. Gandia, tenemos un equipo de trabajo, que gracias al esfuerzo, productividad y el talento de las personas que la integran, somos punteros en  el sector';
  public insta = 'Nuestras Instalaciones';
  public instalaciones = 'Contamos con la mayor tecnologia punta en el sector, tanto en el campo como en nuestros almacenes, pero todo esto, sin descuidar la parte más artesana del sector';
  public producto = 'Uva Blanca';
  constructor() {
  }

}
