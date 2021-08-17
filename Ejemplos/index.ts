/*
========= Codigo de typeScript ==================
*/
interface Pasajero{
    nombre: string;
    hijos?:string[];
}

const Pasajero1: Pasajero = {
    nombre:"jose"
}
 const pasajero2: Pasajero = {
     nombre: 'Melisa',
     hijos:['Natalia','Gabriel']    
}
function imprimeHijos(pasajeroa:Pasajero):void{
    const cuantosHijos = pasajeroa.hijos.length;
    console.log(cuantosHijos)
}
 imprimeHijos(Pasajero1)

