import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ContactoComponent} from "./features/pagina-contacto/Pagina_contacto.Module";
import {InicioComponent} from './features/pagina-inicio/pagina-inicio.component';


const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio'},
  { path: 'inicio', component: InicioComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
