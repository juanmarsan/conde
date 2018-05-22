import {Component} from '@angular/core';

@Component({
  selector: 'app-asesoramiento-directive',
  templateUrl: './pagina-asesoramiento.component.html',
  styleUrls: ['pagina-asesoramiento.component.scss']
})
export class AsesoramientoComponent {
  public title = 'Asesoramiento';

  public empresa : string = 'Le ayudamos a montar su viñedo';
  public asesoramiento : string = 'En una buena plantación no solo influye la calidad de la planta, las manos y el buen hacer ' +
    'del viticultor son claves para el perfecto desarrollo de la planta. Por ello les damos unos pequeños consejos que le van  a ' +
    'ayudar para obtener una perfecta plantación. Al recibir la planta deberá humedecerla para que se recupere del estrés ' +
    'hídrico, y conservarla en un local fresco y sin corriente de aire. Limpiar los barbados de yemas y raíces intermedias ' +
    '(sobre todo en variedades muy vigorosas), las raíces inferiores deben ser cortadas de forma que puedan recuperarse ' +
    '(nunca arrasar). Tener en cuenta los marcos de plantación de la D.O. En la primera poda, cortar la brotación del injerto ' +
    'dejando dos yemas, provocando un mayor desarrollo al año siguiente. La eliminación de los racimos: el primer año en su ' +
    'totalidad; el segundo año la mitad de la producción; y el tercer año un tercio (para no producir un agotamiento prematuro).';

  public instalacionTitulo : string = 'La instalación de su viñedo paso a paso';
  public instalacionSubtexto : string = 'Las decisiones que tome antes de la plantación de un viñedo son trascendentales para ' +
    'asegurar el éxito de un proyecto a largo plazo. Nosotros le ofrecemos un valor añadido a sus injertos de vides: el ' +
    'asesoramiento técnico competente para cada proyecto en particular. Los viticultores más avezados quizá tienen muy ' +
    'claro ya cuáles son los pasos a seguir, pero a los recién llegados a este sector seguir paso a paso el proceso les puede ' +
    'ayudar a definir en qué momento necesitan asesoramiento o el servicio de una empresa especializada.';

  public instalacionPaso1 : string = '1. Estudio previo y preparación del terreno';
  public instalacionPaso1P1 : string = 'Observación de la finca (orografía, peculiaridades climatológicas…)';
  public instalacionPaso1P2 : string = 'Valoración y diagnóstico de análisis de suelo que determinará';
  public instalacionPaso1P3 : string = 'Existencia de subparcelas';
  public instalacionPaso1P4 : string = 'Abonados de fondo';
  public instalacionPaso1P5 : string = 'Presencia de nematodos y necesidad de desinfección';
  public instalacionPaso1P6 : string = 'Elección del portainjerto';
  public instalacionPaso1P7 : string = 'Labores preparatorias del terreno (despedregado, nivelación, drenes, subsolado o ' +
    'volteo de tierra…)';


  public instalacionPaso2 : string = '2. Elección del material vegetal y densidad';
  public instalacionPaso2P1 : string = 'Portainjerto y vinífera más adecuados';
  public instalacionPaso2P2 : string = 'Atendiendo a características del suelo, climatología y objetivos vitivinícolas. ';
  public instalacionPaso2post : string = 'La previsión anual y el pedido al vivero es muy importante si se pretende una combinación ' +
    'y patrón fuera de lo común o se quiere multiplicar un viñedo propio.';


  public instalacionPaso3 : string = '3. Diseño de plantación y estructuras portantes';
  public instalacionPaso3P1 : string = 'Sistema de conducción';
  public instalacionPaso3P2 : string = 'Características de la espaldera';
  public instalacionPaso3P3 : string = 'Orientación de las líneas';
  public instalacionPaso3P4 : string = 'Marco de plantación y densidad';
  public instalacionPaso3P5 : string = 'Cómo calcular las plantas que entran por hectárea.';
  public instalacionPaso3P6 : string = 'Accesorios vitícolas';


  public instalacionPaso4 : string = '4. Ejecución y seguimiento de la plantación';
  public instalacionPaso4P1 : string = 'Replanteo de la parcela';
  public instalacionPaso4P2 : string = 'Plantación manual o con máquina guiada por láser o GPS';
  public instalacionPaso4P3 : string = 'Cuidados imprenscindibles e inmediatos (quitar hierbas, riego de apoyo…)';
  public instalacionPaso4P4 : string = 'Entutorado e instalación de espaldera';




  constructor() {
  }

}
