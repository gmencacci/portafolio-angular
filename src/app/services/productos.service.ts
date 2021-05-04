import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto-pagina.interface';
import { delay } from 'rxjs/operators';
import { ProductoItem } from '../interfaces/producto-item-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
  cargando: boolean = false;

  constructor(private http: HttpClient) {
    this.cargarProducto();
  }

  cargarProducto() {
    this.cargando = true;
    return new Promise<void>((resolve, reject) => {
      this.http.get<Producto[]>('https://angular-portafolio-eba02-default-rtdb.firebaseio.com/productos_idx.json')
        .pipe(delay(1000))
        .subscribe((resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    })
  }

  cargarProductoPorId(id: string) {
    return this.http.get<ProductoItem>(`https://angular-portafolio-eba02-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  async buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      await this.cargarProducto();
    }

    this.productosFiltrado = this.productos.filter(producto => {
      return producto.categoria.indexOf(termino) >= 0 || producto.titulo.indexOf(termino) >= 0;
    });

  }
}
