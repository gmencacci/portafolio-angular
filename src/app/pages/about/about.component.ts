import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/interfaces/equipo-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {





  constructor(public infoPaginaService: InfoPaginaService) {
  }

  ngOnInit(): void {
  }

}
