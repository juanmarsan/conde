import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routes";
import {PaginaInicioModule} from './features/pagina-inicio/pagina-inicio.module';
import {PaginaProductosModule} from './features/pagina-productos/pagina-productos.module';
import {PaginaInfoModule} from './features/pagina-info/pagina-info.module';
import {PaginaContactoModule} from './features/pagina-contacto/pagina-contacto.module';
import {PaginaAsesoramientoModule} from './features/pagina-asesoramiento/pagina-asesoramiento.module';
import {ConfigurationService} from '../core/domain/services/configurationService';


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
    PaginaAsesoramientoModule
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
