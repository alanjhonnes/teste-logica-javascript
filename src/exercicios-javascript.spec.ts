import { crescentePorValorMaximo, elevarAoQuadrado, Item, somaNumeros, somentePares, totalDasVendas, Venda } from "./exercicios-javascript";

describe("Exercicios Javascript", () => {

    describe("Somente pares", () => {
        it("Deve retornar somente os números pares dado um determinado vetor", () => {
            const input = [1, 2, 3, 4];
            const result = [2, 4];
            expect(somentePares(input)).toEqual(result);
        })
    });

    describe("Soma total", () => {
        it("Deve retornar a soma de todos os items do array", () => {
            const input = [1, 2, 3, 4];
            const result = 10;
            expect(somaNumeros(input)).toEqual(result);
        })
    });

    describe("Elevar ao quadrado", () => {
        it("Deve retornar o quadrado de cada item do array", () => {
            const input = [1, 2, 3, 4];
            const result = [1, 4, 9, 16];
            expect(elevarAoQuadrado(input)).toEqual(result);
        })
    });


    describe("Crescente por valor máximo", () => {
        it("Deve filtrar o vetor de items somente com os items de valores menores ou iguais ao valor maximo, e ordenar por ordem crescente", () => {
            const input: Item[] = [
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
            ];
            const result: Item[] = [
                {
                    name: 'android',
                    value: 5,
                },
                {
                    name: 'xiaomi',
                    value: 10,
                },
                
            ];
            expect(crescentePorValorMaximo(input, 10)).toEqual(result);
        })
    })


    describe("Total das vendas", () => {
        it("Deve calcular o total das vendas de todos os produtos de acordo com a quantidade vendida", () => {
            const input: Venda[] = [
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
            ];
            const result: number = 90;
            expect(totalDasVendas(input)).toEqual(result);
        })

        it("Deve calcular o total de multiplas vendas", () => {
            const input: Venda[] = [
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
                },
                {
                    items: [
                        {
                            name: 'android',
                            quantity: 1,
                            value: 10
                        },
                        {
                            name: 'ios',
                            quantity: 3,
                            value: 20
                        }
                    ]
                },
            ];
            const result: number = 160;
            expect(totalDasVendas(input)).toEqual(result);
        })
    })
})
