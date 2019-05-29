'use strict';

function creaSumador(valor) {
    return function (valor2) {
        // return valor + valor2;
        return valor;
        // return valor2;
    }
}

var suma5 = creaSumador(5);

console.log(suma5(10));
console.log(suma5(20));
// console.log(creaSumador(7));