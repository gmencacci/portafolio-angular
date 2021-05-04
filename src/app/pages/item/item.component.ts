import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoItem } from 'src/app/interfaces/producto-item-pagina.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {


  id: string = "";
  prod: ProductoItem;
  // = {
  //   categoria: "",
  //   desc1: "",
  //   desc2: "",
  //   producto: "",
  //   resumen: "",
  //   subtitulo1: "",
  //   subtitulo2: ""
  // };

  constructor(private router: ActivatedRoute,
    private productoService: ProductosService) { }

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.productoService.cargarProductoPorId(param['id'])
        .subscribe((producto: ProductoItem) => {

          this.id = param['id'];
          this.prod = producto;
        })
    })
  }

}
