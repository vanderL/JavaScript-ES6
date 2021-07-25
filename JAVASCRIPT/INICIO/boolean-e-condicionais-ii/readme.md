# Operadores Logicos &&
&& Compara se uma expressão e a outra é verdaidera
```
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6>); // true
```
> Se ambos os valores forem true ele irá retornar o ultimo valor verificado. Se algum valor for false ele irá retorna o mesmo e não irá continuar a verificar os próximos.

# Operador Lógicos ||
|| Compara se uma expressão ou outra é verdadeira
```
true || true; -> true
true || false; -> true
false || true; -> true
'Gato' || 'Cão'; -> 'Gato
(5 - 5) || (5 + 5); -> 10
'Gato' || false; -> Gato
(5 >= 5) || (3 < 6); -> true

// Retorna o primeiro valor true que encontrar
```
# Switch
Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
```
var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Cor favorita é Azul')
        break;
    case 'Amarelo':
        console.log('Cor favorita é Amarelo')
        break;
    case 'Vermelho':
        console.log('Cor favorita é Vermelho')
        break;
    default:
        console.log('Outra cor')
}
```