import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit, OnDestroy {

  producto :Producto[] = [];

  productoSub : Subscription | undefined;
  
  constructor(private productoServices: ProductosService){}
  

  ngOnInit(): void {
   this.productoSub = this.productoServices.getProductos()
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


  ngOnDestroy(): void {
    this.productoSub?.unsubscribe()
  }
}
