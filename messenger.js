
// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

let messenger = (user) => {
    let online; 
    switch(user) {
        case 0:
            online = 'No hay nadie en línea';
            break;
        case 1:
            online = 'JuanCarlos_Bodoque está en línea';
            break;
        case 2: 
            online = 'JuanCarlos_Bodoque y Juanin-Juan_Harry están en línea';
            break;
        case 3:
            online = 'JuanCarlos_Bodoque y 2 usuarios más están en línea';
            break;
        default:
            online = 'No tienes conexión';
    }
    return online;

}
 console.log(messenger(4));