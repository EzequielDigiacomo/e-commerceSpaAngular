import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit, OnDestroy {
  
  slug : string | undefined;

  producto :Producto | undefined;

  productoSub : Subscription | undefined;


  galeria : Array<any> = [];
  renderGaleria : boolean = true;
  currentImg : string | undefined;
  
  constructor(private route: ActivatedRoute, private produtoServices: ProductosService) {}
  

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id']
     console.log(this.slug)

     this.productoSub = this.produtoServices.getProductos()
        .subscribe({
         next : (productos : Producto[]) => {
           this.producto = productos.filter(p => p.slug === this.slug)[0]
           this.currentImg = this.producto.imageUrl[0]
           console.log(this.currentImg)
         },
         error:(err : any) =>{
           console.error('Error', err)
         }
    })
  }

  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }

  handleChangeImg(itemImg : string){
    this.currentImg = itemImg;
  }
}
