/*
=========Codigo de typeScript
*/
interface direccion1{
    calle:string;
    pais:string;
    ciudad:string
}

interface SuperHeroe{
    nombre:string;
    edad: number;
    direcccion: direccion1;
    mostrarDireccion:() => string 
}

const superHero: SuperHeroe={
    nombre:"Spiderman",
    edad:30,
    direcccion:{
        calle:'MAin St',
        pais: 'USA',
        ciudad:'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' +this.direcccion.ciudad + ', ' + this.direcccion.pais;    
    }
}

const direccion= superHero.mostrarDireccion();
console.log(direccion)
     
