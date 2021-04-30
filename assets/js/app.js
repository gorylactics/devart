// var x = 10;
// var y = 20;

// function abc(x,y){
//     x = x+10;
//     y = y+10;

//     console.log(x);
//     console.log(y);
//     return x*10;
// }

// var z = abc(x,y);

// console.log(x);
// console.log(y);
// console.log(z);

function saludo(){
    
    console.log(1);
    return 2;
        // La funcion se ejecuta pero no se manda a llamar desde ningun lugar , se ejecuta pero se pierde en si misma, el console.log() tampoco se muestra , aunque si se ejecuta por lo que no tiene ninguna importacia, seria solo como un comentario;
}

saludo();
        // como el valor no se almacena en ninguna variable se pierde y solo se muestra el mensaje del desarrollador;

console.log(saludo()); 
        //la ejecucion completa de la funcion solo es demostrativa , su return no se esta guardando en ningun lugar
        //tampoco se esta guardando el return en ninguna variable , pero se mmuestra todo el contenido y resultado de la funcion mediante el console.log

var a = saludo();
        //Desde la variable , el return no se muestra, pero igual manera se esta guardando en la var a; el valor esta ahi para ser usado
        //en la variable guardo el retorno , el console solo es informativo asi que mientras la funcion se ejecute , este se mostrara en consola , solo es informativo para el dev

console.log(a/*  + "\nEjecucion de la variable desde un console.log() por lo que solo se muestra y nada se guarda " */);
        //aca se esta mostrando desde la varieable el proceso de la funcion , su retorno si se esta guardando y tambien se muestra el console.log();

/* al estar todas las opciones encendidas , la consola usa la ---var a = saludo(); --- para el console.log(a) y de esa manera solo muestra su resultado en el console ya quede una llamado directo de la funcion guardada en una variable para a usar el lugar de dato que se ejecuta y almacena en el console , sin el console , para a tener el lugar de una varieble con una llamada directa de la funcion   */





/* var b = saludo() + 3 * saludo();
console.log(b); */