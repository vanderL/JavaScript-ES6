# ARRAY
É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
```
var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox
 ```
>Acesse um elemento da array utilizando **[n]**

# MÉTODOS E PROPRIEDADES DE UMA ARRAY
```
var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
 ```
>Existem diversos outros métodos, como **map**, **reduce**, **forEach** e mais que veremos mais à frente

# FOR LOOP
Fazem algo repetidamente até que uma condição seja atingida.
```
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console
 ```
> O for loop possui 3 partes, **início**, **condição** e **incremento**

# WHILE LOOP
```
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console
 ```
> O for loop é o mais comum

