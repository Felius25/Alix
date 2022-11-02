import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from "../../servicios/productos.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos:Producto[] = [];

  constructor(private _productosService:ProductosService,
              private router:Router
  ) { }

  ngOnInit(): void {

  this.productos = this._productosService.getProductos(),

  console.log( this.productos);

  }

  verProducto( idx:number){
    this.router.navigate( ['/producto',idx])
  }

}


