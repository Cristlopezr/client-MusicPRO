import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../productos-interfaces';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[]=[];

  constructor(private proService:ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
    
  }


  getProductos(){
    this.proService.getProductos().subscribe(productos => this.productos = productos )
  }

}
