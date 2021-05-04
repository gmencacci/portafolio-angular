import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo-pagina.interface';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargando: boolean = false;
  equipo: Equipo[] = []

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  cargarInfo() {
    this.http.get('assets/data/data-pagina.json').subscribe(
      (data: InfoPagina) => {
        this.cargando = false;
        this.info = data;
      }
    );
  }

  cargarEquipo() {
    return this.http.get<Equipo[]>('https://angular-portafolio-eba02-default-rtdb.firebaseio.com/equipo.json')
      .subscribe(resp => {
        this.equipo = resp;
      });
  }
}
