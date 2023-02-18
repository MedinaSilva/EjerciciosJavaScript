// 

let hr = new Date().getHours();
let day = new Date().getDay();

function bussinesHour(hr){
    
    if (hr >= 9 && hr<=18){
        return true;
    } else{
        return false;
    }
}

function businessDay(day){
    if(day>=1 && day<=5){
        return true;
    } else{
        return false;
    }
}

if (bussinesHour(10)===true && businessDay(5)===true){
    console.log('Es día y horario laboral');
} else {
    console.log('No es día ni horario laboral');
}


// console.log(bussinesHour(10));
// console.log(businessDay(5));