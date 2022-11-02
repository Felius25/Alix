import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
})
export class ProductoTarjetaComponent implements OnInit {

  @Input() producto:any = {};
  @Input() index:any;

  @Output() productoSeleccionado: EventEmitter<any>;

  constructor( private router:Router) {
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verProducto(){
       this.router.navigate( ['/producto',this.index])
    // this.productoSeleccionado.emit( this.index );
  }

}
