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


### No final de tudo, a gente vai pegar uma página para estilizar juntos para praticar todos os conceitos que a gente aprendeu. Não será nada muito complexo, mas com toda certeza será de muito aprendizado.

<hr>

## Fontes com CSS: 

+ As fontes, certamente, são um passo importantíssimo na hora de estilizar o seu site. Elas são, por muitas vezes, o que dá aquela sensação de site bem-feito. Vou deixar dois sites que diferem somente na fonte:

<center>
    <img src="https://i.imgur.com/wxn62Ju.png">
    <img src="https://i.imgur.com/Eke8o4U.png">
</center>

+ Esse é um exemplo de como as fontes fazem diferença na hora de criar um site. É óbvio que é possível encontrar exemplos bem mais gritantes de fontes que destoam completamente do site, masé evidente a diferença quando trocamos as fontes.

+ As fontes são divididas em dois grandes grupos, que se dividem em infinitas possibilidades de fontes. Existe o grupo das fontes serifadas (segunda imagem) e o grupo das fontes sem serifas (primeira imagem). 

    + Serifadas: as fontes serifadas costumam remeter a sites mais antigos, podem acabar não enciaxando tão bem em alguns tipos de layouts. Elas são essas fontes que têm tracinhos em seu corpo. 

    + Sem serifas: são essas fontes sem tracinhos nos cantos, costumam passar uma imagem de fontes mais clean, que dão um ar mais moderno para os sites e layouts que elas estão inseridas.

    + Existem mais alguns tipos de fonte que são bem menos utilizadas, que é o caso das fontes decorativas, cursivas e temáticas. As fontes decorativas são usadas em casos MUITO específicos, assim como as temáticas. São usadas em sites, por exemplo, que se quer remeter a algum evento, como natal ou halloween, aí usam aqueles efeitos de sangue caindo, bengala de natal e etc. No caso das cursivas, são fontes mais detalhadas e desenhadas. Eu, particularmente, não consigo pensar em um caso de uso para essas fontes senão um site que fala sobre essas fontes. Realmente, a usabilidade delas é bastante restrita.

+ Agora a gente vai ver uma das informações mais úteis quando se trata de fontes. 

<a href="https://fonts.google.com">Google fonts</a>

+ O google fonts permite uma infinidade de fontes serem adicionadas à página que se está construindo e, como a gente viu anteriormente, as fontes são de extrema importância para dar uma cara mais sofisticada para a nossa aplicação. Sendo assim, é muito importante saber mexer com o google fonts, apesar de ser bastante simples de fazer isso.

+ Outra coisa que é importante sabermos ao trabalhar com fontes é que o tamanho delas importa e muito.

    + Por convenção, o tamanho padrão de fontes em navegadores é de 16px, pois é um número que foi definido como legível em diferentes plataformas e resoluções, etc.

    + No entanto, as fontes devem seguir uma linha de importância dentro da aplicação. Não é desejável que a gente tenha um título com o tamanho menor que o subtítulo, ou uma fonte de um parágrafo explicativo sobre algo dentro do nosso site ter uma fonte que ocupa metade da tela. Isso não é só feio, como pode atrapalhar na leitura e compreensão do nosso conteúdo.

+ Mas como a gente faz para trabalhar com fontes em CSS? É bastante simples. Para o caso de a gente estar trabalhando com uma fonte padrão, não sendo uma fonte importada, a gente deve simplesmente definir a propriedade 'font-family' de algum elemento dentro do nosso HTML. Exemplo:

```css
    h1 {
        font-family: 'Arial', sans-serif;
    }
```

+ Nesse caso, a gente está definindo como fonte padrão a Arial, mas caso o navegador não consiga encontrar no computador do cliente a fonte Arial, ele irá optar por colocar no lugar dela uma fonte sem serifa padrão.

+ Para definir o tamanho da fonte que a gente deseja, é só alterar a propriedade 'font-size', conforme o exemplo:

```css
    h1 {
        font-family: 'Arial', sans-serif;
        font-size: 24px;
    }
```

+ Essa seria uma fonte um pouco mais destacada dentro da nossa página. Contudo, mais para frente a gente vai ver que usar pixels para definir o tamanho das coisas em CSS não é uma prática muito recomendável. 

+ Agora, o próximo passo que a gente quer, é definir a cor e o peso da fonte. (O peso nada mais é do que definir se a fonte estará em negrito, se estará fina, etc).

+ Para definir o peso de uma fonte, a gente usa a propriedade 'font-weight', conforme o exemplo:

```css
    h1 {
        font-family: 'Arial', sans-serif;
        font-size: 24px;
        font-weight: bold;
    }
```

+ Repare que a nossa fonte está tomando forma. Ela deverá ser da família Arial, ter um tamanho de 24px e um peso de negrito (bold). 

+ O que a gente também pode querer definir é, por exemplo, a cor da fonte. Para isso, basta a gente mexer no atributo 'color'. 

```css
    h1 {
        font-family: 'Arial', sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: #e2e2e2;
    }
```

+ Nesse caso, a fonte terá como cor um cinza clarinho. A nossa fonte já está quase pronta. Agora resta definir se a gente quer algum estilo ou alguma decoração na nossa fonte.

+ Para isso, a gente vai alterar as propriedades: 'font-style' e 'text-decoration'. 

+ O font style é para definir se a nossa fonte estará em itálico, normal, etc.

+ Já o text-decoration, é para definir coisas como: sublinhada, riscada, sem nenhuma decoração, etc.

+ Nesse caso, queremos um título em itálico e sublinhado. (Ignorem que o título está ficando horroroso).

```css
    h1 {
        font-family: 'Arial', sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: #e2e2e2;
        text-decoration: underline;
        font-style: italic;
    }
```

+ E, pronto! A fonte está pronta! Basta a gente ver o resultado.

<h1 style="color:#e2e2e2; font-family: 'Arial', sans-serif; font-size: 24px; font-weight: bold; text-decoration: underline; font-style: italic; text-align: center;">Nosso título</h1>

+ Ignorando o fato de que ele ficou horroroso, a gente usou praticamente todas as propriedades que poderia ter usado em se tratando de fontes.

<hr>

## Unidades de medida em CSS:

+ As unidades de medida são uma parte importantíssima do estudo das folhas de estilo. Hoje em dia, em um mundo que está cada vez mais na palma da mão com os smartphones, o conceito de responsividade passou a vir bastante à tona.

+ Nesse tempo a gente não vai aprofundar muito nos conceitos de responsividade, mas vamos pincelar algumas boas práticas para uma responsividade mais natural.

+ pixels: 

    + Talvez a unidade de medida mais conhecida no ramo da computação, cada pixel representa a mínima unidade possível dentro da tela de um computador. Abaixo, a gente tem uma caixa de 100px por 100px.

    <div style="background: none; height: 100px; width: 100px; border: 1px solid white; margin: 25px 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center;">CAIXA</div>

    + Independente do tamanho da tela, essa caixa sempre terá 100px. Isso implica que, em um celular, esse conteúdo também terá 100 pixels. Agora, vamos imaginar que no nosso site a gente queira 5 caixas dessas. Provavelmente isso iria escapar para fora da tela do celular, o que é um comportamento certamente indesejado para quem está desenvolvendo essa aplicação. 

+ rem / em: 

    + Ignorando os nomes estranhos, vamos prestar atenção na funcionalidade deles. O rem e o em têm uma função extremamente semelhante. Ambos medem os tamanhos baseados no tamanho da fonte. O que difere um do outro é que o 'em' pega o tamanho da fonte do 'pai' daquele elemento como referência, já o 'rem' pega o tamanho da fonte padrão da página inteira. 

    + É bem mais comum usar o rem, por ter certeza que ele não terá um valor indesejado no caso de mudança de tamanho de fontes.

    + Mas, certo, já que o rem é baseado no tamanho da fonte da nossa página, mas a página tem a fonte medida em pixels, o que difere o rem de colocar o valor em pixels?

    + Os navegadores têm um tamanho padrão de fonte para cada dispositivo ou resolução. Isso significa que, em celulares, o tamanho padrão será geralmente menor que em um computador.

    + O tamanho padrão de uma fonte para os navegadores de computador é 16px, isso significa que 1rem terá o valor de 16px. Mas, em um celular, dependendo do modelo, ele pode ter um valor diferente desse mesmo 1px. Isso que torna o rem importante de ser usado.

+ vw / vh:

    + Esses dois são extremamente importantes quando o assunto é responsividade ou colocar um tamanho nas coisas. O vw é um acrônimo para view-width (largura da tela) e o vh é um acrônimo para view-height (altura da tela). 

    + Isso significa que 15vw vão representar 15% do tamanho total da tela do usuário. 

    + Em um celular, por exemplo, 15% da largura seria algo bem fininho. Já em um computador, já seria algo mais largo. É importante saber mexer com esses valores calculados com base no tamanho da tela, pois eles são extremamente importantes.

+ %:

    + A última da lista, mas não menos importante, é a porcentagem. Ela é a responsável por definir o tamanho dos elementos baseados no tamanho que o elemento-pai deles ocupam. Isso significa que: se temos uma div de 800px, e a gente definir que a largura da div filha deve ter 50%, ela vai ocupar 400px. O mesmo serve para a altura.

    + Mas, como a gente aprendeu anteriormente, usar os pixels para definir o tamanho das coisas não seria o ideal. Portanto, a gente pode fazer o seguinte. A gente quer uma div com 800px de largura, certo? Vamos supor, para facilitar as contas, que um monitor tem 1600px de largura. Sendo assim, essa div-pai terá 50vw de largura. A div filha, que tem 50% do tamanho da div pai, terá 25vw de altura, que representaria os mesmos 400px. Contudo, em um monitor de menor resolução, por exemplo de 1200px de largura, essa largura seria proporcional ao tamanho do monitor.

` Vamos ver isso na prática: ` <a href="https://codepen.io">codepen.io</a>

+ Agora que a gente já viu sobre seletores, sobre o box-model, sobre displays, sobre fontes e, por fim, sobre as unidades de medida, basta a gente aplicar isso que a gente aprendeu para fixar o conteúdo! 

+ Para isso, a gente vai usar o site do banco inter para ter uma referência. O nosso papel agora é copiar (não necessariamente de forma igual, pois demandaria bastante tempo), o cabeçalho do site.

![cabeçalho banco inter](https://i.imgur.com/BtDyewX.png)

<center>
<a href="https://codepen.io" style="font-size: 24px;">codepen.io</a>
</center>

<hr>

## Hover:

+ Como isso é apenas para falar do básico do CSS, o tópico de hover será o último tópico dessa seção. Se algum de vocês já teve acesso ao estudo do CSS, sabe que existem várias outras coisas que se pode estudar dentro dessa linguagem de folha de estilo, mas acho que não caberia falar aqui. 

+ O hover nada mais é que o evento que acontece quando o mouse está em cima do elemento. Por exemplo, quando se passa o mouse em cima de um botão, ele costuma fazer alguma ação e mudar o seu estilo de alguma forma. Isso é feito pelo :hover. 

+ O hover é bem simples de usar. Vamos pegar o exemplo do mesmo h1 que a gente fez antes. Dessa vez, a gente vai estilizar ele para quando tiver um mouse em cima. 

```css
    h1 {
        font-family: 'Arial', sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: #e2e2e2;
        text-decoration: underline;
        font-style: italic;

        /*O hover cai muito bem com a propriedade 'transition-duration', que vai indicar o tempo que a transição irá demorar.*/
        transition-duration: .3s;
    }

    h1:hover {
        text-decoration: none;
    }

    /* Nesse caso, a gente está dizendo para o CSS que quando o mouse estiver em cima do título, a gente quer que ele fique sem o sublinhado.*/
```

<style>
    h1 {
        font-family: 'Arial', sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: #e2e2e2;
        text-decoration: underline;
        font-style: italic;

        /*O hover cai muito bem com a propriedade 'transition-duration', que vai indicar o tempo que a transição irá demorar.*/
        transition-duration: .3s;
    }

    h1:hover {
        text-decoration: none;
    }
</style>

<center>
    <h1>Nosso título</h1>
</center>

+ Lembra que ficaram pendentes os efeitos de hover no nosso cabeçalho do inter, né? Pois agora a gente vai terminar eles.

<CENTER>    
<a href="https://codepen.io" style="font-size: 24px;">codepen.io</a>
</CENTER>

<hr>

<p style="font-size: 18px">Pois bem, essa foi a parte de CSS que eu queria mostrar para vocês. Vale lembrar que a gente ainda vai desenvolver o projeto da lista de tarefas por completo. Espero que tenha dado pra entender tudo certinho. O material vai ficar disponível no GitHub. Se alguém tiver alguma dúvida na hora de pegar ele por lá, pode me avisar! ~ Theo</p>

