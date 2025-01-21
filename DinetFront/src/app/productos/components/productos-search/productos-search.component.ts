import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'productos-search',
  standalone: false,

  templateUrl: './productos-search.component.html',
  styleUrl: './productos-search.component.css',
})
export class ProductosSearchComponent {
  @Output()
  public onList = new EventEmitter<Producto>();

  @ViewChild('txtCodigo')
  public txtCodigo!: ElementRef<HTMLInputElement>;

  @ViewChild('txtNombre')
  public txtNombre!: ElementRef<HTMLInputElement>;

  producto: Producto = {
    nombre: '',
    id: 0,
  };

  consultar(): void {
    const valCodigo = this.txtCodigo.nativeElement.value;
    const valNombre = this.txtNombre.nativeElement.value;

    this.producto.nombre =valNombre;
    this.producto.id = valCodigo == '' ? 0 : parseFloat(valCodigo);

    this.onList.emit(this.producto);
  }
}
