import { JsonPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PeliculaImagenPipe } from "src/app/pipes/pelicula-imagen.pipe";
import { peliculasService } from "../../services/peliculas.service";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { GaleriaComponent } from "./galeria/galeria.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  cartelera: any;
  populares: any;
  popularesNinos:any;

  constructor(public _ps: peliculasService) { }

  ngOnInit() {
    this.obtenerCartelera();
    this.obtenerPeliculasPopulares();
    this.obtenerPopularesNinos();
  }

  obtenerPeliculasPopulares() {
    this._ps
      .getPopulares()
      .subscribe((data) => (this.populares = data));
  }

  obtenerCartelera() {
    this._ps.getCartelera().subscribe((data) => {
      this.cartelera = data;
    });
  }

  obtenerPopularesNinos(){
    this._ps.getPopularesNinos()
      .subscribe( data => this.popularesNinos = data);
  }
}
