import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {



  constructor(public _servicio: InfoPaginaService,
    private router: Router) { }

  ngOnInit(): void {
  }


  buscarProducto(termino: string) {

    if (termino.length < 1) {
      return;
    }


    this.router.navigate(['/search', termino]);



    console.log(termino);
  }

}
