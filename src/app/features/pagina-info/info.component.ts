import { Component } from '@angular/core';

@Component({
  selector: 'info-directive',
  templateUrl: './info.component.html',
  styleUrls: ['info.component.scss']
})
export class InfoComponent {
  public title : string = 'Información';

  public textoContacto : string = 'Puede contactar';


  constructor(){
  }

}
