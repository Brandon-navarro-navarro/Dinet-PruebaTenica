import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl: string = 'https://localhost:7292/api/Productos';
  constructor(private http: HttpClient) {}

  consultarProductos(filtro:Producto): Observable<Producto[]> {
    return this.http
      .get<Producto[]>(`${this.apiUrl}?id=${filtro.id}&nombre=${filtro.nombre}`)
      .pipe(catchError(() => of([])));
  }

  insertarProductos(producto:Producto): Observable<Producto> {
    return this.http
      .post<Producto>(`${this.apiUrl}`, producto)
      .pipe(catchError(() => of(producto)));
  }
}

