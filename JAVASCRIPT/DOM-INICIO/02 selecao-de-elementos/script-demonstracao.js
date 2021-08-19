// Selecionando pelo o ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('teste'); // retorna null

if(!contatoSection){
    console.log('não existe o elemento')
}else {
    console.log('contatoSection')
}

//console.log(animaisSection)

const gridSection = document.getElementsByClassName('grid-section')
const contato = document.getElementsByClassName('grid-section contato')
//console.log(gridSection[0])

const primeiraLi = document.querySelector('li');
//console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
//console.log(primeiraUl);

const linksInterno = document.querySelector('[href^="#"');
//console.log(linksInterno);

//estatico
const animaisImg = document.querySelectorAll('.animais img');
//console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNODE = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML);// ao vivo
console.log(gridSectionNODE);// não atualiza

gridSectionNODE.forEach( (item, index) => {
    console.log(index);
})

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach( (item, index) => {
    console.log(item.textContent, index);
})

