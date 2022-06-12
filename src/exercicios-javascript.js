"use strict";
exports.__esModule = true;
exports.totalDasVendas = exports.crescentePorValorMaximo = exports.elevarAoQuadrado = exports.somaNumeros = exports.somentePares = void 0;
/**
 * Faça a função retornar um array somente com os números pares
 * @param numeros
 */
function somentePares(numeros) {
    const pares = numeros.filter(y => (y % 2) == 0); //utilizei o método fiter pois acredito ser, nesse caso, mais simples que uma estrutura de repetição
    return pares;
}
exports.somentePares = somentePares;
console.log(somentePares([1, 2, 3, 4])); // [2, 4]
/**
 * Complete a função para retornar a soma de todos os números do vetor
 * @param numeros
 */
function somaNumeros(numeros) {
    let t = 0;
    for (let i = 0; i < numeros.length; i++) {
        t += numeros[i];
    }
    return t;
}
exports.somaNumeros = somaNumeros;
console.log(somaNumeros([1, 2, 3, 4])); // 10
/**
 * Complete a função para retornar um vetor com o quadrado de cada valor
 * @param numeros
 */
function elevarAoQuadrado(numeros) {
    let arr = [];
    for (let i = 0; i < numeros.length; i++) {
        arr.push(Math.pow(numeros[i], 2));
    }
    return arr;
}
exports.elevarAoQuadrado = elevarAoQuadrado;
console.log(elevarAoQuadrado([1, 2, 3, 4])); // [1, 4, 9, 16]
/**
 * Deve filtrar o vetor de items somente com os items de valores menores ou iguais ao valor maximo, e ordenar por ordem crescente
 */
function crescentePorValorMaximo(items, valorMaximo) {
    const resultadoFiltro = items.filter(y => (y.value <= valorMaximo));
    return resultadoFiltro.sort((x, y) => (x.value - y.value)); //ordenação do resultado
}
exports.crescentePorValorMaximo = crescentePorValorMaximo;
console.log(crescentePorValorMaximo([
    {
        name: 'xiaomi',
        value: 10
    },
    {
        name: 'ios',
        value: 12
    },
    {
        name: 'android',
        value: 5
    },
], 10));
/**
 * Calcule o total das vendas de todos os produtos de acordo com a quantidade vendida 
 */
function totalDasVendas(vendas) {
    let total = 0;
    for (let i = 0; i < vendas.length; i++) {
        for (let j = 0; j < vendas[i].items.length; j++) {
            total += vendas[i].items[j].quantity * vendas[i].items[j].value;
        }
    }
    return total;
}
exports.totalDasVendas = totalDasVendas;
console.log(totalDasVendas([
    {
        items: [
            {
                name: 'android',
                quantity: 5,
                value: 10
            },
            {
                name: 'ios',
                quantity: 2,
                value: 20
            }
        ]
    }
]));
// 90
