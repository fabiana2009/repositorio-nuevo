//variables
var num1 = 1;
var num2 = 2;
var texto1 = '4';
var num3 = 5
//salidas
console.log(num1 > num2);
console.log(num1 == texto1);
console.log(num1 === texto1);

//operadores logicos
//el num1 es mayor al num2 o num3 es menor a num1
console.log(num1 > num2 || num3 < num1);

//el numero es mayor a num2 y num2 es mayor a num3
console.log(num1 > num2 && num2 > num3);



//condicional
//si num1 es mayor a num2 "Maria gana el juego"
//si num3 es mayor a num1 "Mario gana el juego"
//caso contrario "Juan gana el juego"

if (num1 > num2) {
    console.log("Maria gana el juego");
} else if (num3) {
    console.log("Mario gana el juego")
} else {
    console.log("Juan gana el juego")
}