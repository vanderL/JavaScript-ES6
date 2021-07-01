<h1 align="center"> CSS - Cascating StyleSheet </h1>

+ Diferente do HTML, que é um pouco mais teórico, o CSS é bastante prático. Portanto, a abordagem desse tópico será bastante diferente. Vou exemplificar cada um dos tópicos, no lugar de listar e explicar cada um. Dessa forma, irá ficar mais dinâmico e simples de entender. Aposto que você vai adorar mexer com o CSS.

<hr>

## Como colocar o CSS na página?

+ Para colocar o CSS na página, deve ser colocado, na head da página, a tag `<style> </style>`. Desde já, vou ensinar a melhor forma de você linkar uma folha de estilo (CSS).

+ Apesar de colocar a tag style ser uma forma de colocar o CSS na página, a melhor forma é linkar o seu documento CSS ao seu HTML. Para isso, usa-se a tag `<link>` no head do HTML também. É só você imaginar que, dentro dessa tag link estará todo o seu CSS, o que equivale a colocar as tags de style, mas você separa o arquivo para uma questão de organização.

```html
<head> 
    Resto da tag <head>

    <link rel="stylesheet" href="style.css">
</head>

    rel: qual o tipo de relação da tag link com o seu documento HTML. 
         nesse caso, o tipo de relação deles é stylesheet (folha de estilo).
    
    href: de onde que o elemento deve ser trazido, o caminho para encontrá-lo.
```

<hr>

## Os seletores CSS: 

+ A única parte teórica dessa aba será essa, mas ela é bastante simples de entender. Para você poder estilizar um elemento, é necessário que o CSS saiba quem é que você está querendo estilizar. Para isso que servem os seletores. Eles vão buscar o elemento no HTML baseado em alguns fatores, que vão ser discorridos abaixo: 

    + Ids: 

        + Você deve lembrar quando falamos dos ids no HTML e que eu falei que eles têm a função de identificar os elementos no CSS, né? Pois bem. Os IDs são únicos de cada elemento, o que indica que não pode existir mais de um elemento com o mesmo ID. 
        
        + O ID tem a função de estilizar um único elemento que vai ser escolhido a dedo. Com o passar do tempo, você vai perceber que colocar muitos ids em vários elementos para estilizar cada um individualmente não é uma prática.

        + O seletor de id é a #, depois dele, deve vir o id do elemento que se quer estilizar. É bastante intuitivo de entender.

        + Supondo que o elemento que se quer estilizar é o título da página, e que ele tem o id="title": 
        `<h1 id="title"></h1>`<br>
        Na hora que você for selecionar ele no seu HTML, basta usar o #title.
        
    + Classes: 

        + são usadas quando se quer estilizar mais de um elemento, ou formar um padrão para todos os elementos que tiverem uma determinada classe. Vários elementos podem ter a mesma classe, por exemplo: <br>
            `<a class="link"></a>`<br>
            `<a class="link"></a>`<br>
            `<a class="link"></a>`<br>
    
        + Para estilizar todos os elementos que têm a classe 'link', basta usar o seletor de classes, que é um . e, em seguida, colocar o nome da classe: <br>
        `.link`

    + Tags: 
    
        + Assim como as classes, esse seletor irá estilizar todos os elementos que têm a tag (a tag HTML mesmo). O seletor de tags, na verdade, é a ausência de algum seletor específico, ele é somente o nome da tag, exemplo:

        + Vamos supor que se quer estilizar todas as tags h2 com um padrão dentro da página. Para isso, a gente vai usar o seletor de tags:

        ```css
            h2 {
                Estilos que se deseja aplicar.
            }
        ```    

<hr>

## Box model (caixas dentro de caixas):

+ No CSS, é usado um modelo de estilização chamado 'box model'. Nele, todos os elementos devem ser vistos como caixas e essas caixas têm algumas propriedades que uma caixa normal teria: <br> Altura, largura, margem, preenchimento, cor, sombra, borda, posição, formato, rotação e etc.

+ Cada uma dessas propriedades descritas acima podem ser alteradas no CSS, mas, lembrando, assim como praticamente tudo na área da programação, tudo é feito em inglês. 

+ Para entender o box-model, vamos dar uma olhar essa imagem:

<img src="https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png">

+ Bom, primeiramente vamos tratar do conteúdo. O conteúdo de uma caixa pode ser uma imagem, um texto, um link ou nada. Sim, o CSS permite pegar partes vazias e estilizá-las, mas vamos ver isso mais à frente.

+ O conteúdo, como vimos na imagem, pode ter uma altura e uma largura (height e width). São exatamente esses os nomes que a gente vai usar quando estiver estilizando o elemento.

+ Depois das propriedades de altura e largura, vemos o padding. De cara, é bastante confuso entender como o padding funciona. Vamos entender o padding como sendo o preenchimento. Fazendo uma analogia a uma caixa real, que tenha uma televisão dentro, vamos pensar o conteúdo como sendo a televisão, o ar que tem em volta como sendo o padding e a caixa física em si como sendo a borda, que é o próximo tópico.

+ A borda é a responsável por várias, mas várias MESMO estilizações possíveis. Ela já é bem mais simples de entender, pois não passa de o que o nome sugere que ela seja.

+ Depois da borda, vemos a 'margin'. Muita gente, no começo, pode confundir a margin com o padding. Basta pensar: aquilo que está para dentro da borda, é padding, o que está para fora, é margin. A margem é o espaçamento que um elemento vai ter dos demais elementos de uma página.

+ Por fim, temos o 'top', 'right', 'left' e 'bottom', que são os indicadores de posição de um elemento e como ele estará posicionado na página. Nem sempre vai ser necessário usar esses atributos de um elemento para posicioná-lo.

+ Entendendo o box model, já é meio caminho andado para entender o CSS como um todo. Para isso, vamos praticar a construção de um botão simples.

<a href="https://www.codepen.io">Codepen: </a>


<center>
<img src="https://i.imgur.com/grmXzS1.png" alt="Imagem de dois botões de exemplo"> 
</center>

+ Partindo um pouco pra prática, vamos fazer jutnos esses dois botões. Para isso, vamos usar o codepen, que é uma plataforma online em que é possível estilizar somente algum elemento específico sem ter que baixar nada e de maneira bem mais prática.


+ Esse exemplo é bem simples, mas dá pra perceber um pouco o poder que tem o CSS na estilização de elementos HTML.

+ Um útlimo exercício que vamos fazer nessa seção antes de passar para a próxima vai ser pegar um site e determinar as boxes que ele possui. Esse site será o GitHub. 


<center>
<img src="https://i.imgur.com/6BX3Nhp.png" alt="Home do github">
</center>

<hr>

## Posicionamento de elementos e display: 

+ Os elementos, que agora são vistos por nós como caixas, têm que ser posicionados dentro da caixa grande, que será o nosso site. Para isso, a gente deve usar algumas formas de posicionar os elementos e elas serão vistas agora. Vamos dividir este tópico em etapas e, claro, por ser apenas introdução, não vamos falar de absolutamente todas as opções existentes.

<h3 style="text-decoration: underline; font-weight: bold"> Display: </h3>

+ Display é uma maneira de a gente falar para o CSS como a gente quer que aquele elemento se comporte dentro da caixa em que ele está ou como que a gente quer que os elementos-filhos de um determinado elemento se comportem. Pode ter ficado um pouco confuso, mas isso vai ficar mais simples conforme a gente for avançando nesse tópico. 

+ Existem vários tipos de display, e cada um deles 'desbloqueia' diversas propriedades consigo. Vou dar o exemplo do display: flex, que é talvez o que a gente mais vai usar.

    + display: flex -> 
        + O display flex desbloqueia consigo diversas propriedades que podem ser colocadas em um elemento. Dentre elas temos: 
            + flex-direction: é o responsável por ditar como que os elementos devem se comportar dentro do elemento que está contendo eles. Pode rececber valores como: column, column-reverse, inline, etc. Os nomes são bem explicativos. 

            + align-items: é o responsável por alinhar todos os elementos verticalmente conforme for indicado por nós, podendo receber valores como center, top, bottom...
            
            + justify-content: é o responsável por alinhar horizontalmente os itens. Pode receber valores como center, left, right, justify, space-between, space-around e etc.

    + display: block -> 
        + O display block, como o nome sugere, dispõe os itens como blocos. Não é o ideal utilizar ele, por não ter tantas propriedades.

        + Um bloco contém um espaço em branco tanto em cima como embaixo e não permite outros elementos HTML ao lado dele. 

    + display: inline-block -> 
        + O display inline-block tem a disposição dos itens em linha, como o nome sugere. Não terão itens abaixo de outros, todos os itens de um elemento-pai estarão dispostos em linha.

+ Não vou me estender muito nessa parte de displays, mas fique ciente que na maioria dos casos você vai usar, ou o display flex, ou o display: block ou o grid, que não vamos falar aqui por ser um pouco mais complexo e não ter tanto cabimento de ser tratado aqui. Se você, por curiosidade, quiser procurar, eu recomendo que veja o site do MDN ou procure tutoriais no youtube para entender melhor como o grid funciona.

+ Assim como nos casos anteriores, vamos praticar essa parte aqui também. A gente vai ter que fazer a seguinte disposição de conteúdos com HTML e CSS: 


<center>
<img src="https://i.imgur.com/gkR4SZJ.png" alt="display example">
</center>
