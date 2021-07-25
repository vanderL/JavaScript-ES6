# A ordem importa
Começa por multiplicação e divisão, depois por soma e subtração.
```
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2 // 40
```
> Parênteses para priorizar uma expressão

# Operadores Aritméticos Unários
```
var incremento1 = 5;
console.log(incremento1++); // 5
console.log(incremento1); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
```
> Mesma coisa para o decremento ` -- `

# O + e - tenta transformar o valor seguintes em número
```
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade ='25';
+idade; // 25 (número)
-idade; // 25 (número)
console.log(+idade + 5); // 28

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
```
>O ` - ` antes de um número torna ele negativo