import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routes";
import {PaginaInicioModule} from './features/pagina-inicio/pagina-inicio.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginaInicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
