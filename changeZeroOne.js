// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit


const changeNumber = (num) => {
    let order; 
    switch(num) {
        case 0:
            change = 1;
            break;
        case 1:
            change = 0;
            break;
        default:
            change = 'Esa no es una opción disponible';
    }
    return change;
}

console.log(changeNumber(1));