function sumar(a:number, b:number):number {
    return a+b
}

const sumarFlecha = (a: number,b:number):number =>{
    return a+b
}

function multiplicar(numero:number, otronumero?:number, base:number=2){ //primero los obligatorios, luego los opcionales, luego los predeterminado
    return numero * base
}

interface PersoonajeLOR{
    nombre:string,
    pv:number,
    mostrarPV: () =>void
}

function curar(personaje:PersoonajeLOR,curarX:number):void{
    personaje.pv += curarX
}

const nuevoPersonaje: PersoonajeLOR = {
    nombre: 'Fiorellla De',
    pv:50,
    mostrarPV(){
        console.log('Puntoss de Vida:', this.pv)
    }
}

curar(nuevoPersonaje,20)
console.log(nuevoPersonaje.mostrarPV())