import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

//Routing
import { APP_ROUTING } from './app.routes';

// Servicio
import { peliculasService } from './services/peliculas.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

// Pipe
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria/galeria.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BusquedaComponent,
    DetallePeliculaComponent,
    PeliculasComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    peliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
