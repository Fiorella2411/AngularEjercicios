/*
=========Codigo de typeScript
*/
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor={
    volumen: 30,
    segundo: 36,
    cancion: 'Messi',
    detalles:{
        autor:'Ed Seran',
        anio: 2015
    }
}
//Desestructuracion de objetos
//
// const { volumen, segundo, cancion, detalles: {autor}} = reproductor;
const { volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles
// console.log('El volumen Actual de', volumen)
// console.log('El segundo Actual de', segundo)
// console.log('El detalles Actual de', detalles)
// console.log('El autor Actual de', autor)

//desestructuracion de Arreglos
const Dbz: string[]= ['goku', 'vegeta', 'Trurnks']

const [,,p3] = Dbz;

console.log('Personaje 1', Dbz[0])
console.log('Personaje 2', Dbz[1])
console.log('Personaje 3', p3)