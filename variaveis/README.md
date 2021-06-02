#Variáveis

Responsáveis por guardar dados na memória.
Inicia com a palavra var, let ou const

exemplo:
var nome = 'Vander';
let idade = 25;
const naFaculdade = true;

console.log(nome, idade, naFaculdade);


##Evita repetições
DRY (Dont Repeat Youself)

var preco = 20;
var totalComprado = 5;
var preco = preco * totalComprado;

##sintaxe
Palavra chave "var" seguida do nome, sinal de igual e o valor.

exemplo:
var nome = 'Vander';

##Vírgula
Utilize a vírgula para criar mais de uma variável, sem repetir a palavra chave "var".

exemplo:
var nome = 'André', 
    idade = 25, 
    naFaculdade = true;

##Sem valor
Pode declarar ela e não atribuir valor inicialmente.

exemplo
var precoAplicativo;
//retorna undefined

##Nome
#Os nomes podem iniciar com $, _, ou letras.
Podem conter número mas não iniciar com eles

#Case sensitive
"nome" é diferente de "Nome"

#Não utilizar palavras reservadas
https://www.w3schools.com/js/js_reserved.asp

#Camel Case
É comum nomearmos assim: abrirModal

//Inválido
var %nome;
var function;
var 1possuiFaculdade;

//válido
var $selecionar;
var _nome;
var possuiFaculdade;

#Hoisting
São movidas para cima do código, porém o valor atribuído não é movido;

exemplo
console.log(nome);
var nome = 'Vander';

var profissao = 'Analista Desenvolvedor';
console.log(profissao);

#Mudar o valor atribuído
É possível mudar os valores atribuído a variáveis declaradas com "var" e "let".
Porém não é possivel modificar valores das declaradas com "const"

exemplo
var idade = 25
idade =26

let preco = 50;
preco = 25;

const faculdade = true;
faculdade = false;
//retorna um erro