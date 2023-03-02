// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

var multiples_3=[];
var multiples_5=[];

function multiplos(num,cantidad){
    for (var i = 1; i <= cantidad; i++){
        if (i % 2 == 0){
            res= multiples_3.push(i);
        }
    }
}
multiplos(2,10);