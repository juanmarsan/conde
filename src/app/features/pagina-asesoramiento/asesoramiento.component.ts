import { Component } from '@angular/core';

@Component({
  selector: 'contacto-directive',
  templateUrl: './asesoramiento.component.html',
  styleUrls: ['asesoramiento.component.scss']
})
export class ContactoComponent {
  public title : string = 'Contacto';

  public textoContacto : string = 'Puede contactar';


  constructor(){
  }

}
