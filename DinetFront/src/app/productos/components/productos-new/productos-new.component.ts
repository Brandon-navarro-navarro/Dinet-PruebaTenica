import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';

declare var bootstrap: any; // Importación para trabajar con Bootstrap


@Component({
  selector: 'productos-new',
  standalone: false,

  templateUrl: './productos-new.component.html',
  styleUrl: './productos-new.component.css',
})
export class ProductosNewComponent {
  @Output()
  public onList = new EventEmitter<Producto>();

  producto: Producto = {
    nombre: '',
    precio: 0,
    fechaCreacion: this.formatearFecha(new Date()),
  };

  invalidNombre: boolean = false;
  invalidPrecio: boolean = false;
  invalidFechaCreacion: boolean = false;

  constructor(private productoService: ProductosService) {}

  guardar(): void {
    if (!this.validarCampos()) return;

    this.productoService
      .insertarProductos(this.producto)
      .subscribe((producto) => {
        this.onList.emit();
      });

    // Resetea el objeto después de guardar
    this.producto = {
      nombre: '',
      precio: 0,
      fechaCreacion: this.formatearFecha(new Date()),
    };
    this.invalidFechaCreacion = false;
    this.invalidPrecio = false;
    this.invalidFechaCreacion = false;

    const modalElement = document.getElementById('exampleModal') as HTMLElement;
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }

  validarCampos(): boolean {
    console.log(this.producto);
    let valid: boolean = true;
    if (this.producto.nombre == '') {
      this.invalidNombre = true;
      valid = false;
    }

    if (this.producto.precio === 0) {
      this.invalidPrecio = true;
      valid = false;
    }

    if (this.producto.fechaCreacion == null) {
      this.invalidFechaCreacion = true;
      valid = false;
    }
    return valid;
  }

  formatearFecha(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mes comienza en 0
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
