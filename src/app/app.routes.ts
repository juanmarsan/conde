import {ContactoComponent} from "./features/pagina-contacto/Pagina_contacto.Module";
import {InicioComponent} from "./features/pagina-inicio/Pagina_inicio.Module";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index'},
  { path: 'inicio', component: InicioComponent},
  { path: 'contacto', component: ContactoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
