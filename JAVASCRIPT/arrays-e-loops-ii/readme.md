# ARRAYS E LOOPS
```
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}
 ```
>O for loop é o mais comum

# BREAK
O loop irá parar caso encontro e palavra break
```
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}
```
# FOREACH
forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
```
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
```
>Podemos passar os seguintes parâmetros **item**, **index** e **array**

# NÃO SE CONFUNDA COM A SINTAXE
```
var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}
```
>Não aconselho escrever da forma acima, mas funciona normalmente.