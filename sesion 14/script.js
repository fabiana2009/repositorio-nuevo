var color = "verde";
var tamaño = "mediano";
var precio = 1000;
var estacion = "verano"

var nota = 16;


// sie el color es verde y el precio es menor igual a 1000
//entonces lo compro, caso contrario me compro otra cosa
if (color = "verde" && precio <= 1000) {
    console.log("lo compro");
} else {
    console.log("compro otra cosa");
}
//si el tamaño es mediano o el color es verde lo compro,
//caso contrario me vvoy de viaje
if (tamaño == "mediano" || color == "verde") {
    console.log("lo compro");
}
else {
    console.log("me voy de viaje");
}


// si la estacion es invierno o la estacion es otoño "lo compro"
// caso contrario ahorro el dinero.

if (estacion == "invierno" || estacion == "otoño") {
    console.log("lo compro");
} else {
    console.log("ahorro el dinero");
}

//si el tamaño es mediano o el precio es menor igual a 1000
//o el color es rojo entonces lo compro, caso contrario lo pongo 
//en el banco

if (tamaño == "mediano" || precio <= 1000 || color == rojo) {
    console.log("lo compro");
} else {
    console.log("lo pongo en el banco");

}

//si la nota es mayor o igual a 10 y menor a 15 entonces tendra una "C"
//si la nota es mayor a 15 y menor a 18 entonces tendra una "B"
//caso contrario tendra una "A"

if (nota >= 10 && nota < 15) {
    console.log("C")
} else if (nota > 15 && nota < 18) {
  console.log("B")  
} else {
   console.log("A")
}