import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductoComponent } from './producto/producto.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListaProductosComponent, ProductoComponent],
  imports: [CommonModule,RouterModule],
  exports: [ListaProductosComponent, ProductoComponent],
})
export class ProductosModule {}
