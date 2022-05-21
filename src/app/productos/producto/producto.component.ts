import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ProdSucursal } from '../productos-interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  prodSucursal: ProdSucursal = {
    producto: {
      _id: {
        $oid: '',
      },
      nombre: '',
      precio: 0,
      marca: '',
      descripcion: '',
      __v: 0,
    },
    sucursales: [
      {
        sucursal: '',
        nombre: '',
        stock: 0,
      },
    ],
  };

  constructor(
    private prodService: ProductosService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto() {
    this.actRoute.params
      .pipe(switchMap((params) => this.prodService.getProducto(params['id'])))
      .subscribe((prodSucursal) => {
        this.prodSucursal = prodSucursal;
        console.log(this.prodSucursal);
      });
  }

  comprarProducto() {
    let cantidad_compra = '';
    let nombre_sucursal: string = (<HTMLInputElement>(
      document.getElementById('sucursal')
    )).value;
    let id_sucursal: string = '';

    cantidad_compra = (<HTMLInputElement>document.getElementById('cantidad'))
      .value;

    this.prodSucursal.sucursales.forEach((sucursal) => {
      if (sucursal.nombre == nombre_sucursal) {
        id_sucursal = sucursal.sucursal;
      }
    });

    const producto = {
      producto: this.prodSucursal.producto._id.$oid,
      sucursal: id_sucursal,
      cantidad: cantidad_compra,
    };

    this.prodService
      .putProducto(this.prodSucursal.producto._id.$oid, producto)
      .subscribe((data) => {
        console.log(data);
        this.getProducto();
      });
  }
}
