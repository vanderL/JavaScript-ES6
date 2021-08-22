// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const fotosImage = document.querySelectorAll('img[src^="img/imagem"]')
console.log(fotosImage)
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"')
console.log(links)
// Selecione o primeiro h2 dentro de .animais-descricao
const h2Interno = document.querySelector('.animais-descricao h2')
console.log(h2Interno)
// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length])
