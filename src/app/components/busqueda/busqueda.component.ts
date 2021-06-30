import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { peliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  buscar: string = ''; //Pelicula a buscar

  constructor(public _ps: peliculasService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.getParametrosUrl();
  }

  buscarPelicula() {

    if (this.buscar.length === 0) {
      return;
    }
    this._ps.getBuscarPelicula(this.buscar)
      .subscribe(data => console.log(data));
  }

  getParametrosUrl() {

    this.route.params.subscribe(parametros => {

      if (parametros['texto']) {
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }

    })
  }

}
