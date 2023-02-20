// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion


function fibo (n){
    return n<=1 ? n : fibo(n-1) + fibo(n - 2);
    
}

console.log(fibo(10));





