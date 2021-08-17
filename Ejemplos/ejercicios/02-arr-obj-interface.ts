let habilidades: string[]=['Bash','Cuuntere', 'Hola']

interface Personaje{
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?:string
}

habilidades.push()
const personaje:Personaje ={
    nombre: 'Fiorella',
    hp: 100,
    habilidades: ['hila','cjcjh']
}


personaje.puebloNatal ='Cusco'

console.table(personaje)