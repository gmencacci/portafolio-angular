import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {


  termino: string = "";
  constructor(private route: ActivatedRoute, 
    public productoService: ProductosService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {        
        this.productoService.buscarProducto(params['termino']);


      }
    )
  }
}
