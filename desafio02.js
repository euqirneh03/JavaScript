
/* Faça um programa para Calcular o Valor de uma Viagem.

Você terá 5 variaves. Sendo elas:

1 - Preço do etanol;
2 - Preço da Gasolina;
3- o tipo de combustivél que esta no seu carro;
4 - Distancia em KM da Viagem;

Imprima no console o valor que sera gasto para realizar esta Viagem. */

const precoDoEtanol = 4.30;

const precoDaGasolina = 5.25 ;

const KmPorLitro = 9 ;

const DistaciaEmKm = 1200 ;

const tipoDoCombustivel = 'Etanol';

const litrosCconsumidos = DistaciaEmKm / KmPorLitro;

if (tipoDoCombustivel === 'Gasolina') {
    const valorGasto = litrosCconsumidos * precoDaGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosCconsumidos  * precoDoEtanol;
    console.log(valorGasto.toFixed(2));
}
 