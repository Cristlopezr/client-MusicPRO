export interface Producto {
  _id: {
    $oid: string;
  };
  nombre: string;
  precio: number;
  marca: string;
  descripcion: string;
  imagen: String;
  __v: number;
}

export interface ProdSucursal {
  producto: Producto;
  sucursales: [
    {
      sucursal: string;
      nombre: string;
      stock: number;
    }
  ];
}

// interface RootObject {
//   producto: Producto;
//   sucursales: Sucursale[];
// }

// interface Sucursale {
//   sucursal: string;
//   nombre: string;
//   stock: number;
// }
