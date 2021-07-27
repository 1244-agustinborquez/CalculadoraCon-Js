const btnNumeros = document.getElementsByName('number');
const btnOperaciones = document.getElementsByName('operacion');
const btnIgual = document.getElementsByName('igual')[0];
const btnDelete = document.getElementsByName('delete')[0];
let display = document.getElementById('display');

//varaibles
let opActual = '';
let opAnterior = '';
let operacion = undefined;

//Eventos

btnNumeros.forEach( boton =>{
    boton.addEventListener('click', () =>{
        agregarNumero(boton.innerHTML);
    });
});
btnOperaciones.forEach( boton =>{
    boton.addEventListener('click', () =>{
        seleccionarOperacion(boton.innerHTML);
    });
});
btnIgual.addEventListener('click', () =>{
    calcular();
    actualizar();
    //alert(2+2);
});
btnDelete.addEventListener('click', () =>{
    clear();
    actualizar();
});

//funciones

function seleccionarOperacion(op){
    if(opActual === '') return;
    if(opAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    opAnterior = opActual;
    opActual = '';
}
function calcular(){
    let calculo;
    const anterior = parseFloat(opAnterior);
    const actual = parseFloat(opActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
                calculo = anterior + actual
            break;
        case '-':
                calculo = anterior - actual
            break;
        case '*':
                calculo = anterior * actual
            break;
        case '/':
            if (actual == 0) {
                alert('No puede dividir por 0')
            }else{
                calculo = anterior / actual
            }
            break;
        case '√2':
                calculo = Math.sqrt(anterior)
            break;
        case '√':
                calculo = Math.pow(anterior,1/actual)
            break;
        case '^':
                calculo = Math.pow(anterior,actual)
            break;
        default:
            return;
    }
    opActual = calculo;
    opAnterior = '';
    operacion = undefined;
}
function agregarNumero(num) {
    opActual = opActual.toString() + num.toString();
    actualizar();
}

function clear() {
    opActual = '';
    opAnterior = '';
    operacion = undefined;
}

function actualizar() {
    display.value = opActual;
}




