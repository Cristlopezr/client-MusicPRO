import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { ProductoComponent } from './productos/producto/producto.component';

const routes: Routes = [
  { path: '', component: ListaProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
