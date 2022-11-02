import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const APP_ROUTES: Routes = [

  { path : 'home', component: HomeComponent},
  { path : 'productos', component: ProductosComponent} ,
  { path : 'producto/:id', component: ProductoComponent},
  { path : 'buscar/:termino', component: BuscarComponent},
  { path : 'contacto', component: ContactoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES)
