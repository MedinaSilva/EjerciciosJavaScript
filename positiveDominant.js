// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

const a1=[1, -2, 55, 10];
const a2 = [-1, -3, -5, 4, 6767];
function contNeg(arr) {
    res = arr.filter(x => x < 0).length
    if (res > (arr.length/2)){
        return false;
    } else {
        return true;
    }
    
  }
  
  
 
  console.log(contNeg(a2)); 

