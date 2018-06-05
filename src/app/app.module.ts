import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routes';
import {PaginaInicioModule} from './features/pagina-inicio/pagina-inicio.module';
import {PaginaProductosModule} from './features/pagina-productos/pagina-productos.module';
import {PaginaInfoModule} from './features/pagina-info/pagina-info.module';
import {PaginaContactoModule} from './features/pagina-contacto/pagina-contacto.module';
import {PaginaAsesoramientoModule} from './features/pagina-asesoramiento/pagina-asesoramiento.module';
import {ConfigurationService} from '../core/domain/services/configurationService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {InicioComponent} from './features/pagina-inicio/pagina-inicio.component';
import {ProductosComponent} from './features/pagina-productos/pagina-productos.component';
import {InfoComponent} from './features/pagina-info/pagina-info.component';
import {ContactoComponent} from './features/pagina-contacto/pagina-contacto.component';
import {AsesoramientoComponent} from './features/pagina-asesoramiento/pagina-asesoramiento.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductosService} from '../core/domain/services/productosService';


/*

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginaInicioModule,
    PaginaProductosModule,
    PaginaInfoModule,
    PaginaContactoModule,
    PaginaAsesoramientoModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }



*/



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    InfoComponent,
    ContactoComponent,
    AsesoramientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [ ConfigurationService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
