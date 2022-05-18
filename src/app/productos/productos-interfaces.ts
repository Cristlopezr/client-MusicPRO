export interface Producto {
    _id : {
        '$oid': string
    },
    nombre: string,
    precio: number,
    marca: string,
    descripcion: string,
    __v: number
}

// export interface Producto {
//   _id: Id;
//   nombre: string;
//   precio: number;
//   marca: string;
//   descripcion: string;
//   __v: number;
// }

// export interface Id {
//   '$oid': string;
// }