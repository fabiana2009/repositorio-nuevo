/*
//ejercicio 1
//imprimir los numeros del 0 al 5

var numero=1;
var paises = ["venezuela", "peru", "colombia","parís","argentina"]
 var i=0

while(i<paises.length){
    document.getElementById("resultado").innerHTML += paises[i] + "<br>";
    i=i +1  

}
*/

//mostrar promt para capturar nombre 

function nombre(){
    for(i=0; i<4; i++){
        var nombre = prompt("cual es tu nombre?");
document.getElementById("resultado").innerHTML +=nombre + "<br>";
    }

}