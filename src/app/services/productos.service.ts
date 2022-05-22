import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, ProdSucursal } from '../productos/productos-interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:5000/productos');
  }

  getProducto(id: number): Observable<ProdSucursal> {
    return this.http.get<ProdSucursal>('http://localhost:5000/productos/' + id);
  }

  putProducto(idProducto: String, producto: Object) {
    return this.http.put(
      'http://localhost:3000/productos/' + idProducto,
      producto
    );
  }
}
