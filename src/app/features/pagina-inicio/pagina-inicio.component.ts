import { Component } from '@angular/core';

@Component({
  selector: 'inicio-directive',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['pagina-inicio.component.scss']
})
export class InicioComponent {
  public title : string = 'Inicio';

  public textoContacto : string = 'Puede contactar por cualquiera de los métodos que aparecen en esta página. Si lo desea, también puede hacerlo rellenando el siguiente formulario. Sus datos serán tratados en cumplimiento con lo establecido en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal.';



  constructor(){
  }

}
