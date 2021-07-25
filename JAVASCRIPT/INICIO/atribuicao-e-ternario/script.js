var numero = 20;
var numero2 = 20;

numero += 10;
numero2 = numero2 + 10;

console.log(numero);
console.log(numero2);

var idade = 25;
var naoPossuiCirose = false;

var podeBeber;
podeBeber = idade >= 18 && naoPossuiCirose ? 'beba' : 'nao beba';

console.log(podeBeber);

var naFaculdade = false;
if(naFaculdade)
    console.log('Sim, estou');
    console.log('Sai do IF, note');