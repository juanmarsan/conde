import { Component } from '@angular/core';

@Component({
  selector: 'app-info-directive',
  templateUrl: './pagina-info.component.html',
  styleUrls: ['pagina-info.component.scss']
})
export class InfoComponent {
  public title : string = 'Información';

  public empresa : string = 'Nuestra empresa';
  public  nuestraempresa: string= 'En Viveros Rafael Gandía, somos productores y distribuidores de injertos de vid. Ubicada en Aielo de Malferit, esta empresa familiar, ya en la 4ª generación; se ha convertido en todo un referente en el cultivo de vides americanas, injertos de vid y viveros de almendros. Como empresa líder en el sector, nuestra prioridad es ofrecer a nuestros clientes plantas certificadas de máxima calidad.\n' +
  '\n' +
  'En nuestro afán por mejorar nuestro servicio diariamente, incorporamos en nuestros cultivos las mejores técnicas productivas. Llámenos ahora y confíe en nuestra amplia experiencia y larga trayectoria en el sector agrícola.\n' +
  '\n' +
  'En Viveros Rafael Gandía apostamos por la calidad y los productos naturales. Nuestros productos no están tratados con productos agresivos o no autorizados, por ello, contamos con un equipo especializado altamente cualificado, preparado para ofrecerle el mejor asesoramiento pre y postventa.\n' +
  '\n' +
  'Acondicionamos y conservamos nuestros productos adecuadamente, y pasamos estrictos y rigurosos controles de calidad. Disponemos de variedades de producción propia con diferentes clones con control fitosanitario, según lo dispuesto por la ley CE, con controles de sanidad vegetal.\n' +
  '\n' +
 ' Contacte ahora con nosotros y disfrute de nuestro trato directo y personalizado. En Viveros Rafael Gandía ofrecemos vides americanas e injertos de vid de producción propia y de calidad certificada.';

  constructor(){
  }

}
