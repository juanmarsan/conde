import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from './features/pagina-inicio/pagina-inicio.component';
import {ProductosComponent} from './features/pagina-productos/pagina-productos.component';
import {InfoComponent} from './features/pagina-info/pagina-info.component';
import {ContactoComponent} from './features/pagina-contacto/pagina-contacto.component';
import {AsesoramientoComponent} from './features/pagina-asesoramiento/pagina-asesoramiento.component';


const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'informacion'},
  { path: 'inicio', component: InicioComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'informacion', component: InfoComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'asesoramiento', component: AsesoramientoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
