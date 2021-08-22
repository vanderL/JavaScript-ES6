const imgs = document.querySelectorAll('img');

let i = 0;
imgs.forEach(() => {
    console.log(i++)
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});
