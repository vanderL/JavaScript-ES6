
# CRIAR UM OBJETO
Um objeto é criado utilizando as chaves {}

```
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'
```

# DOT NOTATION GET
Acesse propriedades de um objeto utilizando o ponto .

```
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'
```

# DOT NOTATION SET
Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

```
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'
```

# ADICIONAR PROPRIEDADES E MÉTODOS
Basta adicionar um novo nome e definir o valor.

```
var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';
```

# PALAVRA-CHAVE THIS
this irá fazer uma referência ao próprio objeto.

```
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60
```

>this irá retornar o próprio objeto

# PROTÓTIPO E HERANÇA
O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
```
var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
```
>hasOwnProperty é um método de Object