//var height = 120;
var container = {
    width: 800,
    height: 800,
    backgroundColor: '#c1c1c1',
    metadeHeight() {
        return this.height / 2;
    }
}

container.color = '#fff';
container.reduzirAlterandoCor = function () {
    container.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    console.log('reduzido');
    return true;
}

var bg = container.backgroundColor;

function verificarMetodos(metodo){
    if(metodo){
        console.log('Possui');
        return metodo;
    }else {
        console.log('nao possui')
        return metodo;
    }
}