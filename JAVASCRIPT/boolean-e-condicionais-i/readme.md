# Boolean
Existem dois valores booleanos false ou true.

var possuiGraduacao = true;
var possuiDoutorado = false;

# Condicionais If e Else
verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

var possuiGraduação = true;
if(possuiGraduação) {
    console.log("Possui Graduação");
} else {
    console.log('Não possui graduação);
}
-> retorna "Possui Graduação" e não executa o else
-> O valor dentro dos parênteses sempre será avaliado em false ou true.

# Truthy e Falsy
Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if(false)
if(0)
if(NaN)
if(null)
if(undefined)
if('')
-> Todo o resto é truthy

# Truthy
if(true)
if(1)
if(' ')
if('Shikamaru')
if(-5)
if({})

# Operador Lógico de Negação!
O operador !, nega uma operação booleana. Ou seja, !true é igual a false

# Truthy
if(!true) -> false 
if(!1) -> false
if(!' ') -> true
if(!undefined) -> true
if(!!' ') -> true
if(!!'') -> false
-> Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

# Operadores de comparação
-> Vão sempre retornar um valor booleano

10 > 5; -> true
5 > 10; -> false
20 < 10; -> false
10 <= 10; -> true
10 >= 11; -> false

-> O == faz uma comparação não tão estrita e o === faz uma comparação estrita,
ou seja, o tipo dedado deve ser o mesmo quando usamos o ===

10 == '10'; -> true
10 == '0; -> true
10 === '10'; -> false
10 === 10; -> true
10 != 15; -> true
10 != '10'; -> false
10 !== '10'; -> true