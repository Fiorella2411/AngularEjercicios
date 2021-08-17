/*
========= Codigo de typeScript ==================
*/
//DEcoradores del Clase, solo es conocido en Typescript
function classDecorator<T extends { new (...args: any[]):{}}>(
    constructor: T
    ){
        return class extends constructor{
            newProperty = 'new property'
            hello = 'override'
        };
    }
@classDecorator   
class MiSuperClase{
    public miPropiedad: string = 'Absdba'

    imprimir(){
        console.log('hoa mundo')
    }
}
// console.log(MiSuperClase)

const v = new MiSuperClase()
console.log(v.miPropiedad)