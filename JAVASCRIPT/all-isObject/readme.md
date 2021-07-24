# TUDO É OBJETO
Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'Vander';

```
nome.length; // 5
nome.charAt(1); // 'a'
nome.replace('r', 'son'); // 'Vandeson'
nome; // 'Vander'
```

>Uma string herda propriedades e métodos do construtor String()

# NÚMEROS
var altura = 1.7;
```
altura.toString(); // '1.7'
altura.toFixed(); // '2'
```
>Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

# FUNÇÕES
```
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1
```
# ELEMENTOS DO DOM
```
<a class="btn">Clique</a>

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})
```
> Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

# OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO
Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.