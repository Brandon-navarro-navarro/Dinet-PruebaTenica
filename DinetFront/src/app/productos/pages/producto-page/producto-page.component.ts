import { Component, ViewChild } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';
import { ProductosSearchComponent } from '../../components/productos-search/productos-search.component';

@Component({
  selector: 'app-producto-page',
  standalone: false,
  templateUrl: './producto-page.component.html',
  styleUrl: './producto-page.component.css',
})
export class ProductoPageComponent {
  public productos: Producto[] = [];
  public filtroProducto: Producto = {
    nombre: '',
    id: 0,
    precio: 0,
  };

  @ViewChild(ProductosSearchComponent)
  searchComponent!: ProductosSearchComponent;

  constructor(private productosService: ProductosService) {
    this.consultarProductos(this.filtroProducto);
  }

  consultarProductos(filtro: Producto) {
    this.filtroProducto = filtro;

    this.productosService
      .consultarProductos(this.filtroProducto)
      .subscribe((productos) => {
        this.productos = productos;
      });
  }

  OnSearch(){
    console.log(this.searchComponent?.producto);


    const filtro = this.searchComponent?.producto;
    this.consultarProductos(filtro); // Usar los valores del filtro actual
  }
}
