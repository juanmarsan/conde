import { Component } from '@angular/core';

@Component({
  selector: 'asesoramiento-directive',
  templateUrl: './pagina-asesoramiento.component.html',
  styleUrls: ['pagina-asesoramiento.component.scss']
})
export class AsesoramientoComponent {
  public title : string = 'Asesoramiento';

  public textoContacto : string = 'Puede contactar';


  constructor(){
  }

}
