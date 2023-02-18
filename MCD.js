// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

const mCD=(a,b)=> {
    if (b===0)
    return a;
    return mCD(b,a%b);
}
console.log(mCD(8,16));
