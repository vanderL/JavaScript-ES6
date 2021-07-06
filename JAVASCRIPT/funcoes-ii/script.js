function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}


function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
  console.log(totalPaises); // erro, totalPaises não definido


var profissao = 'Desenvolvedor';

function dados() {
    var nome = 'Vander';
    var idade = 25;
    function outrosDados() {
        var endereco = 'Fortaleza';
        var idade = 26;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}