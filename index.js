/* ----------------------------------------------------------------
FUNCIONALIDADES DO JAVASCRIPT MODERNO (ES6+)
---------------------------------------------------------------- */

const sum = (number1, number2) => {
    return number1 + number2
}

/* ----------------------------------------------------------------
VARIAÇÕES DA ARROW FUNCTION
---------------------------------------------------------------- */

// 1 - Sem return mas retorna - retirar os bigodes
const sum_1 = (number1, number2) => number1 + number2

// 2 - Sem parâmetros
const community = () => 'Teste'

// 3 - Só um parâmetro - pode remover os pârenteses
const double = number => number * 2

// 4 - Dois ou mais parâmetros - sempre usar pârenteses
const sum_2 = (number1, number2) => number1 + number2

// 5 - Arrow function com chaves - perde o poder de retornar sem retorno (1)
const sum_3 = (number1, number2) => {
    return number1 + number2
}

// 6 - Retornando um JSON sem return - utilizar pârenteses no retorno
const get_person_0 = () => ({'name': 'Raul'})

// 7 - IIFE com arrow function
/*
    - Mais segurança no nome das variáveis e dos arquivos
    - Se tivermos duas funções com o mesmo nome em arquivos diferentes iremos receber um erro de declaração
        - Para garantir que nada vai vazar o escopo do arquivo é necessário criar uma função iniciadora em cada arquivo - init()
        - Se precisar vazar o escopo é necessário criar fora da função iniciadora
    
    - IIFE é uma função que se auto invoca no momento da criação - depois não será possível chama-la novamente
        - Retirar o nome da função
        - Envolver a function com ()
        - Depois do último pârenteses de fechamento adicionar ()
*/

(function () {
    const getPerson = () => ({'name': 'Raul'})

    console.log(getPerson())
})()

// 8 - O this é muito mais simples - this.js