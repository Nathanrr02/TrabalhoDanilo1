/*Crie uma função que recebe 2 números como argumento e retorne se o primeiro é
maior ou igual ao segundo.*/
function MaiorMenorIgual (a,b){
    if(a>b) {console.log ("O primeiro número é maior que o segundo")}
    else if(a==b){console.log ("O primeiro e o segundo número são iguais")}
    else{console.log("o segundo número é maior que o primeiro")}
}
MaiorMenorIgual(1,2)
/*Crie uma função que receba a idade da pessoa e retorne a quantidade de dias, crie
uma validação para não permitir número negativo, e quando tiver retorna uma
mensagem de erro.*/
function Idade (idade){
    
    if (idade>0) console.log (idade*365)
        else if (idade<0) {console.log("Ocorreu um erro, esse número é negativo")}
}
Idade (20)
/*Crie uma função que receba número de 1 a 12 e retorne o mês correspondente,
exemplo se colocar o número 2, o retorno deve ser “Fevereiro”.*/
function Meses (numero){
   const meses = {
    1: "Janeiro",
    2: "Fevereiro",
    3: "Março",
    4: "Abril",
    5: "Maio",
    6: "Junho",
    7: "Julho",
    8: "Agosto",
    9: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro"
}
if (numero in meses) {
    return meses [numero]

}
}
const NumeroMeses = 5
const meses = Meses(NumeroMeses)
console.log(meses)
/*Escreva uma função que recebe um valor booleano ou numérico. Se o parâmetro
fornecido for booleano, o retorno deve ser o inverso.Por exemplo, se a entrada for
false, retorna true. Se o parâmetro for numérico, o retorno deve ser o número
inverso. Exemplo: se fornecer 1, o retorno deve ser -1. Se o parâmetro de entrada
não for de nenhum dos tipos, retorna “Booelano ou Número esperados, mas o
parâmetro é do tipo (tipo do parâmetro).*/
function inverterValor(param) {
    if (typeof param === 'boolean') {
      return !param;
    } else if (typeof param === 'number') {
      return -param;
    } else {
      return "Booleano ou Número esperados, mas o parâmetro é do tipo " + typeof parametro
    }
  }
  
  console.log(inverterValor(false))
  console.log(inverterValor(1)) 
  console.log(inverterValor('abc'))
/*Escreva uma função que recebe dois números inteiros não negativos e realize a
multiplicação deles. Porém não pode utilizar o operador de multiplicação.*/
function multiplicacaoSemOperador(a, b) {
    let result = 0;
  
    for (let i = 0; i < b; i++) {
      result += a;
    }
  
    return result;
  }
  let resultado = multiplicacaoSemOperador(4, 5);
  console.log(resultado)
  /*Escreva uma função que recebe 2 parâmetros. O primeiro parâmetro é o elemento
que repetirá, enquanto o segundo será o número de vezes que haverá repetição.
Um array serpa retornado.
Exemplo:
repetir(“teste”, 2 ) // retorna [“teste”, “teste”]
repetir( 4, 3 ) // retorna[4 ,4, 4]*/
function repetidor(element, quant) {
    var arrayResultado = [];
  
    for (var i = 0; i < quant; i++) {
      arrayResultado.push(element);
    }
  
    return arrayResultado;
  }
  console.log(repetidor("teste", 2));
console.log(repetidor(5, 8))
/*Crie uma função que recebe um array de elementos e retorne um array somente
com os números presentes no array recebido como parâmetro.
Exemplo:
filtro([“Js”, 2, “hoje”, 4, 5, 7, “teste”] // retorno [2,4,5,7]
filtro([“teste”,”tentativa”] // retorno []*/




/*Escreva uma função que recebe um array de números e retorna a soma de todos os
números desse array.*/
function somaNumeros(array) {
    let soma = 0;
  
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
  
    return soma;
  }
  let numeros = [5, 5, 5, 5, 5];
let soma = somaNumeros(numeros);
console.log(soma)
/*Crie uma função que recebe um array de números e retorna o segundo maior
número presente nesse array.*/
function maiorNumero(array) {
    let maior = -Infinity;
    let segundoMaior = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maior) {
        segundoMaior = maior;
        maior = array[i];
      } else if (array[i] > segundoMaior && array[i] < maior) {
        segundoMaior = array[i];
      }
    }
  
    return segundoMaior;
  }
  let numbers = [2,6,9,1,];
  let segundoMaior = maiorNumero(numeros);
  console.log(segundoMaior)








