import {Component,  OnInit} from '@angular/core';

import {Contacto} from './../../../core/domain/models/contacto';
import {ProductosService} from '../../../core/domain/services/productosService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-directive',
  templateUrl: './pagina-contacto.component.html',
  styleUrls: ['pagina-contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public title = 'Contacto';
  public notas = 'En Viveros R. Gandia estamos a su disposición para cualquier consulta.';
  public noted = 'Puede solicitar presupuesto o consulta para su plantación, variedad más adecuada, patrón más apropiado.';
  public notes = 'Contacta con nosotros, realizamos presupuestos sin compromiso.';

  public contactoPeticionEnviado = false;
  public contacto: Contacto;
  myForm: FormGroup;
  public lugar : string = 'Calle de la Sarga';
  public poblacion : string = '46812 - Aielo de Malferit';
  public telefono : string = '96 290 44 15';
  public mail : string = 'viverosrafaelgandia@gmail.es';
  public horario : string = ' L -V de 10:00 a 14:00';


  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      movil: ['', Validators.required],
      comment: ['', Validators.required]
    });

  }

  constructor(private productosService: ProductosService, private fb: FormBuilder) {
  }


  sendForm(values: any) {
    console.log(values);
    this.productosService.sendContactForm(values).subscribe(
      response => {
        console.log('enviado');
        this.contactoPeticionEnviado = true;
      },
      error => {
        console.log('error al enviar');
        this.contactoPeticionEnviado = false;
      }
    );
  }

}
