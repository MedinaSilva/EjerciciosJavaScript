// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%



function findArea(pais, area){
    res = 'El área de ' + pais+ ' es ' +(area*100)/149 + '%';
    return res;
}

console.log(findArea('USA', 9.4));