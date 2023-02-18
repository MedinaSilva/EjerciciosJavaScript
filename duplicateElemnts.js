// Escribir una funcion que regrese la cantidad de valores true que hay en un array 
/*  countTrue([true, false, false, true, false]) ➞ 2  
countTrue([false, false, false, false]) ➞ 0  
countTrue([]) ➞ 0  */ 
// Regresar 0 si el array es vacio  

const array1=[true,false,false,true,false];
const array2=[false,false,false,false];
const array3=[];

// El método filter(Boolean) toma los siguientes elementos como false:
/* false, cero, cadena vacía,null,undefined y NaN 
y cualquier otro valor se convierte en true */
function countTrue(arr){
    console.log(arr.filter(Boolean).length);
}

countTrue(array1);




