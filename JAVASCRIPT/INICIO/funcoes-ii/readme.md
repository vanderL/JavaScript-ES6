# PODE OU NÃO RETORNAR UM VALOR
Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
```
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined
```
# VALORES RETORNADOS
Uma função pode retornar qualquer tipo de dado e até outras funções.
```
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}
```
> Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.


# ESCOPO
Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
```
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
console.log(totalPaises); // erro, totalPaises não definido
```
# ESCOPO LÉXICO
Funções conseguem acessar variáveis que foram criadas no contexto pai
```
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

dados();
outrosDados(); 
```
# HOISTING
Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
```
imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
```