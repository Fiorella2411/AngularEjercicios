/*
=========Codigo de typeScript
*/
//DEseestructuracion de argumentos de funciones 
import { Producto, calcularISV } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono2',
        precio: 1520
    },

];
const [total, isv] = calcularISV(carritoCompras);

console.log("Total:", total);
console.log('isvvv:',isv)
