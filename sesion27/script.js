function multiplicar(a, b){
    var producto = a * b
    return producto
}


var resultado = multiplicar( 2,4)
console.log(resultado)


function division(a,b){
    var producto = a/b
    return producto
}

var resultado = division(6,3)
console.log(resultado)



//crear funcion que me halla el cuadrado de un numero


function hallarelcuadrado(a){
var producto = a**2
return producto
}

var resultado = hallarelcuadrado(1)
console.log(resultado)



function calcularpreciofinal(precio,descuento){
    var descuento = precio * descuento / 100
    var preciofinal = precio - descuento
    return preciofinal
}


var resultado = calcularpreciofinal (200,20)
console.log(resultado)