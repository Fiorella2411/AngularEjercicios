/*
========= Codigo de typeScript ==================
*/
function queTipoSoy<T>(argumento: T){
    return argumento;
}
let soyString = queTipoSoy('Hola Fio')
let soynuemro = queTipoSoy(10)
let soyArreglo = queTipoSoy([2,8,2,5,'hguyb',51,2])

let soyExplicito = queTipoSoy<number>(100)