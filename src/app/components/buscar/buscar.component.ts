import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  productos:any[] = []
  termino:any;

  constructor( private activatedRoute: ActivatedRoute,
               private _productosService: ProductosService,
               private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.productos = this._productosService.buscarProductos( params['termino']);
    });

  } verProducto( idx:number){

  this.router.navigate(['/producto',idx]);

  }

}
