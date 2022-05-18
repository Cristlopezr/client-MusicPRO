import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../productos/productos-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {

  }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>('http://localhost:5000/productos')
    
  }

  
  

}
