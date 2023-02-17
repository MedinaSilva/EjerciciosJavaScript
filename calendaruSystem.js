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



// console.log(bussinesHour(8));
// console.log(businessDay(5));


