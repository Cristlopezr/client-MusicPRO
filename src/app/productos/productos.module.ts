import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [ListaProductosComponent, ProductoComponent],
  imports: [CommonModule],
  exports: [ListaProductosComponent, ProductoComponent],
})
export class ProductosModule {}
