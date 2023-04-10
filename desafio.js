 /* Faça um programa para Calcular o custo medio
    de uma viagem.

    Você tera 3 variavesis. Sendo elas:
    1- Preço de combustivel;
    2- Gasto medio de combustivel do carro por km;
    3- Distancia em Km da Viagem;
*/



const valorDoCombustivel = 4.54;

const gastoMedioDoVeiculo  = 8;

let distanciaDaViagem = 550;

const litrosCconsumidos = distanciaDaViagem / gastoMedioDoVeiculo;

const valorGasto = valorDoCombustivel * litrosCconsumidos;

console.log("R$ " + valorGasto);