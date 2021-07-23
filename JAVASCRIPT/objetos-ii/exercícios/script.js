// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const pessoa = {
    nome: 'vander',
    sobrenome: 'Lima de Andrade',
    idade: '25',
    sexo: 'M'
    
}
// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.imprimirNomeC = function() {
    return console.log(`${this.nome} ${this.sobrenome}`)
};

pessoa.imprimirNomeC(); 
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 2000;

console.log(carro)
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

const cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa){
        if(pessoa === 'M') return console.log('Latindo')
        console.log('Sem latir');
    }
}

cachorro.latir(pessoa.sexo)