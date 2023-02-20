// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

const piramidal = (niv) =>{
    let res = (niv*(niv + 1)*(niv + 2))/6
    return res;
}
console.log(piramidal(7));

