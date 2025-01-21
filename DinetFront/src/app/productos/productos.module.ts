import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoPageComponent } from './pages/producto-page/producto-page.component';
import { ProductosTablaComponent } from './components/productos-tabla/productos-tabla.component';
import { ProductosNewComponent } from './components/productos-new/productos-new.component';
import { FormsModule } from '@angular/forms';
import { ProductosSearchComponent } from './components/productos-search/productos-search.component';


@NgModule({
  declarations: [
    ProductoPageComponent,
    ProductosTablaComponent,
    ProductosNewComponent,
    ProductosSearchComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule
  ],
})
export class ProductosModule {}
