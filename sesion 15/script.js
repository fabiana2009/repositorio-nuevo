//variables
var clima = "nublado";
var fruta = 'manzana';
var diasemana = 'martes';

//estructura switch case

switch (clima) {
    case 'lluvioso':
        console.log("recuerda llevar un paraguas");
        break;
    case 'soleado':
        console.log("viste ligero")
        break;
    case 'nublado':
        console.log("sal a la calle")
        break;
    default:
        console.log("tipo de clima desconocido")
        break;
}

//si la fruta es manzana el precio es de s/. 5
//si la fruta es platano el precio es de s/. 2
//si la fruta es mango el precio es de s/. 4
//si es cualquier otra fruta no se tiene esa fruta

switch (fruta) {
    case 'manzana':
        console.log("el precio es de s/. 5")
        break;
    case 'platano':
        console.log("el precio es de s/. 2")
        break;
    case 'mango':
        console.log("el precio es de s/. 4")
        break;
    default:
        console.log("no se tiene otra fruta")
        break;

}

switch (diasemana) {
    case 'lunes':
        console.log("salgo a caminar")
        break;
    case 'martes':
        console.log("voy al parque")
        break
    case 'miercoles':
        console.log("voy a la piscina")
        break;
    case 'jueves':
        console.log("salgo con mis amigos")
        break;
    case 'viernes':
        console.log("salgo a comer")
        break;
    case 'sabado':
        console.log("me voy de fiesta")
        break;
    case 'domingo':
        console.log("no salgo")
        break;
}
