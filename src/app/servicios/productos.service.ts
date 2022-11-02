import { Injectable } from "@angular/core";

@Injectable()
export class ProductosService {

  private productos:Producto[]= [
    {
      nombre: "Pantalon1",
      desc: "jaja no c",
      img: "assets/img/Pantalon1.jpg",
      precio: "$30000",
      fecha: "2015-01-02"
    },
    {
      nombre: "Pantalon2",
      desc: "jaja no c",
      img: "assets/img/Pantalon2.jpg",
      precio: "$30000",
      fecha: "2015-01-02"
    },
    {
      nombre: "Pantalon3",
      desc: "jaja no c",
      img: "assets/img/Pantalon3.jpg",
      precio: "$30000",
      fecha: "2015-01-02"
    },
    {
      nombre: "Camisa1",
      desc: "jaja no c",
      img: "assets/img/Camisa1.jpg",
      precio: "$30000",
      fecha: "2015-01-02"
    },
    {
      nombre: "Camisa2",
      desc: "jaja no c",
      img: "assets/img/Camisa2.jpg",
      precio: "$30000",
      fecha: "2015-01-02"
    },
    {
      nombre: "Camisa3",
      desc: "jaja no c",
      img: "assets/img/Camisa3.jpg",
      precio: "$30000",
      fecha: "2015-01-02"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!")
  }

  getProductos():Producto[]{
    return this.productos;
  }

  getProducto( idx: number){
    return this.productos[idx];
  }

  buscarProductos( termino:string):Producto[]{

    let productosArr:Producto[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.productos.length; i ++){

      let  producto = this.productos[i];

      let nombre = producto.nombre.toLowerCase();
      if( nombre.indexOf( termino ) >= 0){
        producto.idx = i;
        productosArr.push( producto )
      }

    }

    return productosArr;

  }

}


export interface Producto{
 nombre: string;
 desc: string;
 img: string;
 precio: string;
 fecha:string;
 idx?: number;
}


