//window.alert('Hello World');

// let confirmei = window.confirm("Vc confirma?")
// console.log(confirmei)

let {href} = window.location
console.log(href)

const h1Selecionado = document.querySelector('h1');

function handleClick(){
    console.log('Utilizando o handleClick Clicou em ', h1Selecionado.innerText)
}

h1Selecionado.addEventListener('click', handleClick);
