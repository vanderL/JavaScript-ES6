var pessoa = { 
    nome: 'Vander',
    idade: 25,
}

var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
    false(){
        return false;
    }
}

quadrado.lados = 8;
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());
console.memory;