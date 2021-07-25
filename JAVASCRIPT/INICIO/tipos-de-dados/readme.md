# 7 TIPOS DE DADOS
Todos são primitivos exceto os objetos.
```
var nome = 'Vander'; // String
var idade = 25; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
```
>Primitivos são dados imutáveis.

# VERIFICAR TIPO DE DADO
```
var nome = 'Vander';
console.log(typeof nome);
// retorna string
```
> **typeof** null retorna object

# STRING
Você pode somar uma string e assim concatenar as palavras.
```
var nome = 'Vander';
var sobrenome = 'Andrade';
var nomeCompleto = nome + ' ' + sobrenome;
```
# STRING
Você pode somar números com strings, o resultado final é sempre uma string.
```
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
```
# ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
```
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido
```
>Não necessariamente precisamos atribuir valores a uma variável

# TEMPLATE STRING
```
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
```
> Você deve passar expressões / variáveis dentro de **${}**