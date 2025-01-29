"use strict";

var alunos = ["thiago", "joao", "caio", "jose"];
var notas1 = [7, 6, 3, 2];
var alunos_notas = alunos.map(function (itematual, index) {
  return {
    nome: itematual,
    notas: notas1[index]
  }, 0;
});
var resultadoDaProva = alunos_notas.filter(function (resultado) {
  return resultado.notas >= 6;
});
console.log(alunos_notas);
console.log(resultadoDaProva);