import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const  APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BusquedaComponent },
  { path: 'buscar/:texto', component: BusquedaComponent },
  { path: 'pelicula/:id/:pag', component: PeliculasComponent },
  { path: 'pelicula/:id/:pag/:busqueda', component: PeliculasComponent },
  { path:'', pathMatch:'full', redirectTo:'home' },
  { path:'**', pathMatch:'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

