import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { peliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  pelicula:any;
  rutaRetorno:any;
  busqueda:any;

  constructor( private route:ActivatedRoute,
                private _ps:peliculasService ) { }

  ngOnInit() {
    this.obtenerParametros();
  }

  obtenerParametros(){
    this.route.params.subscribe( parametros => {
      if( parametros['pag'] ){
        this.rutaRetorno = parametros['pag'];
      }

      if( parametros['busqueda']){
        this.busqueda = parametros['busqueda'];
      }
      
      this.getPelicula( parametros['id'] );
    });
  }

  getPelicula( id:string ){
    this._ps.getPeliculaById( id ) 
        .subscribe( data => {
          this.pelicula =data;
        })
  }

}
