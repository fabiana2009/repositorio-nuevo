//variables 
const preguntas = ["¿con que frecuencia realizas deporte? <br> considera como deporte cualquier actividad que acelere tu ritmo cardiaco,como  caminar rapido, andar en bicicleta, bailar o, porsupueesto practicar un deporte.",
    "¿cuantos vasos de agua(200ml)bebes al dia?<br>no consideres la ingesta de otros liquidos,como gaseosas, jugos azucarados o alcohol. ",
    "¿cuantas porciones de frutas y verduras consumes diariamente",]

const opciones = [
    ["3 ó mas veces por semana",
        "entre 1 y 2 aveces a la semana",
        "al menos 4 veces al mes"],
    ["al menos 8 vasos al dia",
        "entre 5 y 8, depende del dia",
        "cuando me acuerdo"],
    ["5 ó más",
        "al menos  1 ves al dia"]
];

const clave = [
    [5, 4, 3]
    [5, 4, 2]
    [5, 4, 3]
];


var i = 0; //indece de pregunta
var puntaje = 0;
var intervalo


function mostrarpreguntas() {
    document.getElementById('pregunta').innerHTML = preguntas[0];
    document.getElementById('op1').innerHTML = opiones[0][0];
    document.getElementById('op2').innerHTML = opiones[0][1]
    document.getElementById('op3').innerHTML = opiones[0][2];
};

function iniciarcronometro() { }
const duracion = 15;
const cronometro = document.getElementById('cronometro');
iniciartiempo(duracion, cronometro)

function iniciartiempo() {
    intervalo = setInterval(() => {
        if (duracion == 0){
            mostrarpreguntas();
            clearInterval(intervalo);

}else {
    duracion = duracion - 1;
    cronometro.innerHTML = "00:"+ duracion;

    }
}, 1000);
}

mostrarpreguntas()
















