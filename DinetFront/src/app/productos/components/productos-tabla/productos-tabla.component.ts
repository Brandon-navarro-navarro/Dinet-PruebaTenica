import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'productos-tabla',
  standalone: false,

  templateUrl: './productos-tabla.component.html',
  styleUrl: './productos-tabla.component.css',
})
export class ProductosTablaComponent {
  @Input()
  public productos: Producto[] = [];
}
