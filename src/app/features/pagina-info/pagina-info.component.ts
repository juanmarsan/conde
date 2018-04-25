import { Component } from '@angular/core';

@Component({
  selector: 'info-directive',
  templateUrl: './pagina-info.component.html',
  styleUrls: ['pagina-info.component.scss']
})
export class InfoComponent {
  public title : string = 'Información';

  public textoContacto : string = 'Puede contactar';


  constructor(){
  }

}
