var comidas = ['Pão', 'macarrão', 'feijão'];

comidas.pop()
comidas.push('arroz')

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
    if((numero % 2) === 0 && numero != 0){
        console.log('Sou par')
    }else {
        console.log('Sou impar')
    }
}