function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}
  
mostrarCarro();
//console.log(carro);

if (true) {
    var mes = 'Dezembro';
    let ano = '2021'
    console.log(mes);
    console.log(ano);
}
console.log('Fora do bloco ' + mes);
//console.log('Fora do bloco ' + ano);

{
    var carro2 = 'Fusca 2';
    const carro3 = 'Fusca 3';
}

//console.log(carro2, carro3);
var i = 50;
for (var i = 0; i < 10; i++) {
    console.log(`Posição for com var ${i}`)
}
console.log(i);

for (let i = 0; i < 10; i++) {
    console.log(`Posição for com let ${i}`)
}
console.log(i * 5);
