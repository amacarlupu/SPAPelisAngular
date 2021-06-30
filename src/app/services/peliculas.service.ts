import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class peliculasService {

  private apikey:string = 'd79a75462732ed8cb40a34dcc6723866';
  private urlMoviedb:string = 'https://api.themoviedb.org/3';

  peliculas:any[] = []; // Arreglo que almacena las peliculas buscadas

  constructor( private http:HttpClient ){}

  getCartelera(){

    // Para obtener el rango de fecha
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 ); //Hasta siete dias despues
    let desdeStr = `${ desde.getFullYear() }-${ (desde.getMonth()+1).toString().padStart(2, '0') }-${ (desde.getDate().toString()).padStart(2, '0') }`;
    let hastaStr = `${ hasta.getFullYear() }-${  (hasta.getMonth()+1).toString().padStart(2, '0') }-${ (hasta.getDate().toString()).padStart(2, '0') }`;

    let url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&language=es&sort_by=popularity.desc`;
    return this.http.get<any>( url )
        .pipe(
          map(res => res.results));
  }

  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es&sort_by=popularity.desc`;
    return this.http.get<any>( url )
        .pipe(
          map(res => res.results));
  }

  getPopularesNinos(){
    let url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es&certification_country=US&certification.lte=G&sort_by=popularity.desc`;
    return this.http.get<any>( url )
        .pipe(
          map(res => res.results));
  }

  getBuscarPelicula( texto:string ){
    let url = `${ this.urlMoviedb }/search/movie?api_key=${ this.apikey }&language=es&query=${ texto }&sort_by=popularity.desc`;
    return this.http.get<any>( url )
        .pipe(
          map(res => {
            this.peliculas = res.results;
            return res.results
          }));
  }

  getPeliculaById( id:string ){
      let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;
      return this.http.get<any>( url )
          .pipe(
            map(res => {
              return res
            }));
  }
}
