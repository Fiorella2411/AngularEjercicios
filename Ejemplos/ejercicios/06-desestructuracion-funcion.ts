/*
=========Codigo de typeScript
*/
//DEseestructuracion de argumentos de funciones 
export interface Producto {
    desc: string,
    precio:number,
}
const telefono:Producto ={
    desc:'Nopkia 1',
    precio:150
}
const tableta:Producto = {
    desc:'IPAd 1',
    precio:589
}

export function calcularISV(productoss:Producto[]):[number,number]{
    let total=0;
    productoss.forEach(({precio}) =>{//desestructurar argumentos con ({}), rewcorre para cada elemento del arreglo
        total +=precio
    })
    return [total,total * 0.15]
}
//  const articulos = [telefono, tableta];
//  const [total, isv] = calcularISV(articulos); //como salida es un arrego y se peude desestructurar/
//  console.log('Total:', total)
//  console.log('ISV:', isv)

    
