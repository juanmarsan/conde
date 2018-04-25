import { Component } from '@angular/core';

@Component({
  selector: 'contacto-directive',
  templateUrl: './pagina-contacto.component.html',
  styleUrls: ['pagina-contacto.component.scss']
})
export class ContactoComponent {
  public title : string = 'Contacto';

  public textoContacto : string = 'Puede contactar';


  constructor(){
  }

}
