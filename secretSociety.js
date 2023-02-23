// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

const nombres = ['Felipe', 'Fer', 'Zabdiel'];
const friends = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const theThree = ['Harry', 'Ron', 'Hermione'];


let nombres2 = nombres.toString();
// console.log(nombres2);

console.log (nombres2.slice(0,1), nombres2.slice(7,8), nombres2.slice(11,12));

console.log(friends.sort());
console.log(friends[0].slice(0,1)+ friends[1].slice(0,1) + friends[2].slice(0,1)+ friends[3].slice(0,1) + friends[4].slice(0,1) + friends[5].slice(0,1));

console.log(theThree.sort());
console.log(theThree[0].slice(0,1)+ theThree[1].slice(0,1) + theThree[2].slice(0,1));

