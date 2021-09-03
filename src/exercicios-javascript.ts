/**
 * Faça a função retornar um array somente com os números pares
 * @param numeros 
 */
export function somentePares(numeros: number[]): number[] {
    return numeros;
}


console.log(somentePares([1, 2, 3, 4])); // [2, 4]

/**
 * Complete a função para retornar a soma de todos os números do vetor
 * @param numeros 
 */
export function somaNumeros(numeros: number[]): number {
    return 0;
}

console.log(somaNumeros([1, 2, 3, 4])); // 10


/**
 * Complete a função para retornar um vetor com o quadrado de cada valor
 * @param numeros 
 */
export function elevarAoQuadrado(numeros: number[]): number[] {
    return numeros;
}

console.log(elevarAoQuadrado([1, 2, 3, 4])); // [1, 4, 9, 16]



export interface Item {
    name: string;
    value: number;
}

/**
 * Deve filtrar o vetor de items somente com os items de valores menores ou iguais ao valor maximo, e ordenar por ordem crescente
 */
export function crescentePorValorMaximo(items: Item[], valorMaximo: number): Item[] {
    return items;
}

console.log(crescentePorValorMaximo([
    {
        name: 'xiaomi',
        value: 10,
    },
    {
        name: 'ios',
        value: 12,
    },
    {
        name: 'android',
        value: 5,
    },
], 10));
/*
[
    {
        name: 'android',
        value: 5,
    },
    {
        name: 'xiaomi',
        value: 10,
    },
    
]
*/

export interface ItemWithQuantity extends Item {
    quantity: number;
}

export interface Venda {
    items: ItemWithQuantity[];
}

/**
 * Calcule o total das vendas de todos os produtos de acordo com a quantidade vendida
 */
export function totalDasVendas(vendas: Venda[]): number {
    return 0;
}

console.log(
    totalDasVendas(
        [
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
        ]
    )
)
// 90
