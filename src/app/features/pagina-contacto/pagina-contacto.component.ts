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

  public contactoPeticionEnviado = false;
  public contacto: Contacto;

  genderList: String[];
  signupForm: FormGroup;




  myForm: FormGroup;


  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
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
