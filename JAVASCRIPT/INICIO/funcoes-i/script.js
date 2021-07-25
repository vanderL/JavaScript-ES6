function areaQuadrado(lado) {
    return lado * lado;
}
  
console.log(areaQuadrado(4))

function pi() {
    return 3.14;
}
  
var total = 5 * pi();

console.log(pi());

// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}
  
imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Você gosta do céu';
    } else if(cor === 'verde') {
        return 'Você gosta de mato';
    } else {
        return 'Você não gosta de nada';
    }
}

corFavorita();


addEventListener('click', function() {
    console.log('Clicou');
});
