"use strict";
function Multiplicacao(val_01, val_02) {
    const multiplicacao = val_01 * val_02;
    return multiplicacao;
}
let val_01 = 100;
let val_02 = 2;
const resultado = Multiplicacao(val_01, val_02);
console.log(`A multiplicação entre ${val_01} e ${val_02} é igual a : ${resultado}!`);
// -------
function dizOi(nome) {
    return `Olá Sr.(a) ${nome}`;
}
let seuNome = "Pedro";
const cumprimetaVoce = dizOi(seuNome);
console.log(cumprimetaVoce);
