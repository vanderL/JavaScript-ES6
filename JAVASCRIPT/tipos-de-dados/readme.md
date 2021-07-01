#Tipos de Dados

Todos são primitivos exceto os objetos.

var nome = 'Vander'; -> String
var idade = 28; -> Number
var ativoFaculdade = true -> Boolean
var time; -> undefined
var comida = null; -> Null
var simbolo = Symbol(); -> Symbol // implementado no ES6+
var novoObjeto = {}; -> Object
//Functions, array.

//Primitivos são dados imutaveis

#Verificar tipo de Dado

var nome = 'Vander';
console.log(typeof nome);
//retorna string

//typeof null retorna object


#String
->Você pode somar uma string e assim concatenar as palavras.
var nome = 'Vander';
var sobrenome = 'Lima de Andrade';
var nomeCompleto = nome + '' + sobrenome;

->Você pode somar números com strings, o resultado final é sempre
uma string.
var gols = 1000;
var frase = 'Tulio Maravilha fez' + gols + 'gols';

#Aspas duplas, Simples e Template String

'JavaScript "é muito" bom';
"JavaScript 'é muito' bom";
"JavaScript \"é muito\" bom";
`JavaScript "é muito" bom"`;
"JavaScript "é muito" bom"; //inválido

->Não necessariamente precisamos atribuir valores a uma variável;

#Template String
Você deve passar expressões / variáveis dentro de ${}

var frase = 'Tulio Maravilha fez' + gols + 'gols';
var nomeCompleto = `${nome} ${sobrenome}`;

