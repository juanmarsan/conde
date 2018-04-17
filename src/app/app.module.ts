import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {InicioComponent} from "./features/pagina-inicio/Pagina_inicio.Module";
import {InfoComponent} from "./features/pagina-info/Pagina_info.Module";
import {ContactoComponent} from "./features/pagina-contacto/Pagina_contacto.Module";
import {ProductosComponent} from "./features/pagina-productos/Pagina_productos.Module";
import {AsesoramientoComponent} from "./features/pagina-asesoramiento/Pagina_asesoramiento.Module";


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InfoComponent,
    ContactoComponent,
    AsesoramientoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
