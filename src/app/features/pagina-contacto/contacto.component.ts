import { Component } from '@angular/core';

@Component({
  selector: 'contacto-directive',
  templateUrl: './contacto.component.html',
  styleUrls: ['contacto.component.scss']
})
export class ContactoComponent {
  public title : string = 'Contacto';

  public textoContacto : string = 'Puede contactar';


  constructor(){
  }

}
