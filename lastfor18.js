
// function mesec(m) {

//     var p = m.length % 2;

//     if(p){

//         console.log('neubav');

//         return false;

//     } else {

//         console.log('ubav');

//         return true;

//     }

// }




function mesec(m) {
    var p = m.length % 2;
    
    switch(p) {
        case 1:
            console.log("Neubav Mesec");
            break;
        case 0:
            console.log("Ubav Mesec");
            break;
    }
}

mesec("Januarii");
mesec("April");


var number;
for (number = 1; number < 100; number++){
    if ( number % 1 == 0 ){
        console.log(number);
    }
}
