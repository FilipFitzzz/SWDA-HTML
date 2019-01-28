// For

// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }    


// for ( var i = 0; i <= 100; i = i + 5) {
//     console.log(i);
// }


function Mountian() {
    
    var result = '';

    var flat = function(size) {
        for(i = 0; i <= size; i++){
            result += "_";
        }
    }

    var peak = function(size) {
        result += "/";
        for(var i = 0; i <= size; i++) {
            result += "'";
        }
        result += "\\";
    }
 

    flat(5);
    peak(4);
    flat(15);
    peak(8);
    flat(9);
    peak(6);
    flat(3);
    peak(1);
    flat(8);
    peak(2);
    flat(15);
    peak(11);

    return result;
}

console.log( Mountian() );

// var count = 6;

// for ( var i = 0; i < 100; i++ ) {
//     if ( i % 2 != 0 ) {
//         console.log(i);
//     }
// }

var colors = ["red", "green", "blue"];

    for (var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }




    for (var i = 0, result = ''; i < 5; i++) {
        result += '|__|';
        for (var b = 0; b < 2; b++) {
            result += '  ';
        }
        console.log(result);
    }