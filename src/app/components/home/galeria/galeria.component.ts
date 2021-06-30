import { Component, OnInit, Input } from '@angular/core'
import { PeliculaImagenPipe } from '../../../pipes/pelicula-imagen.pipe';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  // Traer la data de otro componente, en comillas la variable que viene
  // y seguido el nombre de la variable que se usará en este componente
  @Input('peliculas') peliculas:any;
  @Input('titulo') titulo:any;

  constructor() { }

  ngOnInit() {
  }

}
