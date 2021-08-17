/*
=========Codigo de typeScript
*/
class PersonaNormal{

    constructor(
        public nombre: string,
        public direccion: string

    ){}
}

class heroe extends PersonaNormal{

    constructor(
        public alterEgo: string, //propiedad solo visible dentro de la clase
        public edad: number, //visible fuera de la clase
        public nombreReal: string// se puede acceder al valor de esta propiedad sin crear instancia de la clase
      
    ) {
        super(nombreReal,'New york');
    }
}

const iroman =new heroe('iIronamna', 45, 'Tonnny');
console.log(iroman)