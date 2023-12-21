import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  producto :Producto[] = [];
  constructor(private productoServices: ProductosService){}

  ngOnInit(): void {
   this.productoServices.getProductos()
   .subscribe({
    next: (producto:Producto[]) => {
      this.producto = producto
      console.log(this.producto)
    },
    error:(err :any) => {
      console.error(err)
    },
    complete: () =>{
      console.log('compelatado')
    }
   })
  }
}
