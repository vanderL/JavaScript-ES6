# Números

var idade = 28; 
var gols = 1000;
var pi = 3.14; -> ponto para decimal
var exp = 2e10; -> Precisão para até 15 digitos

# Operadores Aritméticos

var soma = 200 + 50;
var substracao = 200 - 50;
var multiplacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5;
-> Lembrando que soma + em Strings serve para concatenar

# Operadores Aritméticos (Strings)

var soma = '100' + 50; -> 10050
var substracao = '100' - 50; -> 50
var multiplacao = '100' * '2'; -> 200
var divisão = 'Comprei 10' / 2; -> NaN (Not a Number)
->É possivel verificar se uma variável é NaN ou não com a função isNaN()

# Nan = Not a Number

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; -> '80kg'
var pesoPorDois = peso / 2; -> NaN (Not a Number)