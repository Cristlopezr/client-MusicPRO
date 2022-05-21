import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ProdSucursal } from '../productos-interfaces';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  prodSucursal: ProdSucursal = {
    producto: {
      _id: {
        '$oid': ''
      },
      nombre: '',
      precio: 0,
      marca: '',
      descripcion: '',
      __v: 0
    },
    sucursales: [{
        sucursal: '',
        nombre: '',
        stock: 0,
    }]
  }

  constructor(private prodService:ProductosService, 
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(){
    this.actRoute.params
      .pipe(
        switchMap( (params) => this.prodService.getProducto(params['id']))
      )
      .subscribe(prodSucursal => {
        this.prodSucursal = prodSucursal
        console.log(this.prodSucursal);
        
      }) 
  }


}
