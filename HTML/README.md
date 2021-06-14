# **HTML**
 
## O que é o HTML?
* HTML: HyperText Markup Language;
* Linguagem de marcação de hiper-textos;
  
  > O hipertexto é, em sua definição, uma forma de escrita e leitura não linear, com blocos de informação ligados a palavras, partes de um texto ou, por exemplo, imagens.
* Serve para fazer a marcação de tudo que terá no aplicativo;
* __FUNDAMENTAL__ para qualquer aplicação web;
* No HTML as marcações são feitas a partir de tags, que são colocadas <entre esses símbolos>;
* As tags são usadas para informar ao navegador a estrutura da aplicação;
  * As tags podem ou não precisar de fechamento;

## Por que se deve aprender HTML?
* O HTML é a base de qualquer aplicação web, então é fundamental saber usá-lo da melhor forma;
* Pessoas que necessitam de acessibilidade, que não podem ver o site, se guiarão pela sua estrutura HTML;
* O motor de busca dos navegadores rankeia melhor as páginas que possuem um HTML claro e acessível;

## O que será aprendido?

1. Estrutura básica de um documento HTML;

2. Principais tags HTML, suas anatomias e como usá-las;

3. Semântica e hierarquia HTML;

4. Atributos nas tags HTML;

5. Como trabalhar com links em HTML;

6. Como trabalhar com vídeos, imagens e áudios em HTML;

7. Como trabalhar com tabelas em HTML;

8. Como trabalhar com formulários em HTML;

## 1° dia - Estrutura básica de um documento HTML / Principais tags HTML, suas anatomias e como usá-las / Semântica HTML / Atributos nas tags HTML:

### * Estrutura básica de um documento HTML: 
  + Um documento HTML é dividido em 2 principais seções: 
    + head: O <head> de um documento HTML é a parte que não é exibida no navegador da Web quando a página é carregada. Nele, ficam informações valiosas, como as tags meta e a tag <title>, que vão ser faladas mais à frente.
    + body: O <body> é o lugar onde tudo que for visível ao usuário irá aparecer. Nele, estão contidas uma infinidade de tags diferentes que permitem infinitas combinações.
  + Estrutura HTML: 
    + Todo documento HTML segue a seguinte estrutura: 
    ~~~html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Título da página</title>
    </head>
    <body>

    </body>
    </html>
     ~~~
    + A tag <!DOCTYPE html> indica o tipo de documento e deve ser colocada sempre no início de um código HTML.
    + A tag HTML envolve todo o código, o que indica que aquilo que for inserido dentro da tag será computado quando a página carregar.
    + Em que a tag head contém informações sobre a página, como o "charset", que recebe padrões como ASCII e UTF-8, mas sempre deve-se usar o UTF8.
    + A tag body é, como foi visto, onde todo o conteúdo que será, de fato, exibido na página, será colocado.
    
### * Principais tags HTML, suas anatomias e como usá-las e Semântica e hierarquia HTML: 
  + A prática é a maior aliada quando se trata de tags. O HTML, apesar de não ser uma linguagem de programação e ser mais simples que elas, também é aprendido com muita prática.
  + Para esse tópico, vou dividir as tags por funções, excluindo aquelas que têm um tópico específico (tabelas, formulários, links e imagens). Eu vou colocar só as tags mais úteis,
  pra não ficar um tópico tão extenso.
  
    
    + header, main, aside e footer: 
       + Essas tags servem para uma divisão lógica do site. 
       + `<header>`: serve para colocar a parte de cima do site, geralmente um menu, a logo do site e etc. 
       + `<main>`: serve para colocar o conteúdo da página propriamente dito. O artigo, o post do blog, o conteúdo em geral.
       + `<aside>`: serve para colocar informações no canto da tela, informações afluentes, que servem para complementar o conteúdo, podendo ser, por exemplo, um menu que permite
       uma pessoa navegar pelas partes de uma página.
       + `<footer>`: também chamado de rodapé, é a parte de baixo do site, geralmente onde ficam os créditos de quem criou, informações adicionais sobre o site ou links.
       
       + Vale lembrar que só de colocar essas marcações, o conteúdo não vai se ajustando sozinho pela página, o ajuste é feito por meio da estilização com CSS.
       
       ![Esquema de funcionamento de uma estrutura HTML](https://i.stack.imgur.com/N1NmR.gif)
    
    + nav, article e section: 
      + Essas tags têm um valor semântico muito importante. É importante usá-las corretamente.
      
      + `<nav>`: tem a função de determinar um menu de navegação, geralmente fica dentro do header.
      + `<article>`: define o conteúdo principal do site em si. Note que ele é feito para aceitar CONTEÚDOS, como o próprio nome (artigos) sugere.
      + `<section>`: tem a função de marcar uma seção, serve para organizar melhor o seu código.
      
    + div:
      + A div merece um tópico só para ela pois ela tem um papel IMPORTANTÍSSIMO no HTML. A div não tem um papel semântico tão importante, mas ela tem uma função 
      importantíssima de demarcar blocos, que serão extremamente úteis quando se estiver aprendendo CSS.
    
    + h1, h2, h3, h4, h5 e h6:
        + São tags para marcar títulos, elas têm uma estilização diferente por padrão e são ordenadas por nível de importância em uma página. A tag h1
        é a tag mais importante da página, que deve conter o título dela, do que ela se trata, o tema de uma notícia ou, no caso de um blog, por exemplo,
        o assunto que será tratado durante aquele post. Não se deve usar mais de uma h1 por página, então use com sabedoria. Lembrando que
        o HTML é uma linguagem de marcação SEMÂNTICA, isso significa que muitas das tags têm um significado. Para os motores de busca, a tag h1 vai ser a tag que define
        sobre o que se trata a página e não tem como uma página ter 5 títulos principais, né?
        
        + As tags h2, h3 e as subsequentes servem para indicar títulos e tópicos de menor importância, respectivamente, sendo o h6 o título de menor importância dentro da página.
        Dificilmente uma página vai passar do h3-h4, mas é importante saber que a hierarquia de títulos vai até o h6.
        
     + p e span:
       + São tags para a inserção do texto, a principal diferença entre elas é que a tag P ocupa a linha completa, jogando o elemento seguinte para baixo na formatação e
       a tag span vai servir para colocar outro texto na mesma linha, sem quebrar a linha para baixo. 
    
     + b, strong, em, i, small, 
      + Apesar de ser uma linguagem semântica, algumas tags se diferenciam por terem ou não valores semânticos: 
      + `<b> e <strong>`: a tag b e a tag strong têm, fundamentalmente, a mesma função, que é deixar um texto em negrito. Contudo, a tag b tem um fraco valor
      semântico, ao passo que a tag strong tem um peso semântico, que indica que o conteúdo colocado dentro dela é um conteúdo mais importante que os demais.
      + `<em> e <i>`: a mesma coisa que acontece com o b e o strong, também acontece com essas duas tags. O em indica que o texto colocado dentro da tag deve ter
      uma ênfase (emphasis) diferenciada, já a tag i (ithalic) serve para deixar um conteúdo em itálico. No fim das contas, ambas deixam o conteúdo em itálico, mas uma tem
      um valor semântico mais forte que a outra.
      
     + hr e br: 
      + É bom passar o mais longe possível dessas tags, usando elas somente em último caso.
      + `<br>`: do acrônimo em inglês 'break roll', ela serve para quebrar uma linha, passando para a linha de baixo. O uso dessa tag não é muito indicado, pois ele serve como
      uma estilização forçada dentro do HTML, mas esse papel é fundamentalmente do CSS.
      + `<hr>`: essa tag serve para desenhar uma linha, separando dois tópicos. Mais uma vez, não é recomendado usar ela, pois se trata de uma estilização e estilizações devem
      ser feitas com o CSS.
      
     + ul, ol e li: 
      + No HTML também se trata com listas, mas não devemos confundir com as listas das linguagens de programação, não têm nada a ver com o tópico. As listas em HTML servem como
      maneiras de organizar conteúdos semanticamente dentro de uma lista, para isso, usam-se as tags ul, ol e li.
      + `<ul>`: é uma tag que engloba os itens da lista, é utilizada para definir que a lista que está dentro dela é uma lista não-ordenada (unordered-list). Por padrão, o 
      HTML irá colocar bolinhas para indicar cada um dos itens da lista.
      + `<ol>`: também é uma tag que engloba os itens de uma lista, mas é utilizada para definir que a lista que está dentro dela é uma lista ordenada (ordered-list). Por 
      padrão, o HTML irá colocar os números referentes a cada posição da lista nos itens da lista.
      + `<li>`: é uma tag que define cada um dos itens de uma lista, sendo ela ordenada ou não. 
      + **As listas têm infinitas utilidades. Elas podem servir para listar os itens de um menu (conforme a imagem abaixo), listar tópicos de uma linha de raciocínio, 
      listar âncoras de um menu lateral, etc. Dentro das listas, podem ser colocadas imagens, links, outras listas, textos, tópicos, entre outras otilidades.**
      
      ![Imagem para representar uma lista em HTML](https://2.bp.blogspot.com/-MDd13E9w-fc/XD3m6FW8phI/AAAAAAAAEa8/rgE7yxke128nN0iXrAPrEfdDRxf3DlAVQCLcBGAs/s1600/html.png)
      
      
#### Um pouco sobre hierarquia de tags: 
+ O tempo todo, tags são colocadas dentro de outras tags. As tags head e body são exemplos claros disso, por serem colocadas dentro da tag-pai "html".
+ No fim das contas, ele vai funcionar como uma árvore cheia de galhos. 
![Representação das ramificações do HTML](https://tableless.github.io/iniciantes/assets/img/arvore-dom.gif)
+ Isso será trabalhado com mais calma quando se estiver aprendendo sobre o DOM, mas perceba que cada tag-pai tem, dentro dela, n tags filhas que, dentro delas, também
podem ter mais tags filhas e, com o passar do tempo, elas irem formando uma 'árvore' de elementos. Cada elemento que tem outros filhos, criaria um nó que levaria para os filhos, 
e os filhos teriam nós que levariam para seus filhos e assim sucessivamente. A organização do código em HTML, por conta disso, torna-se essencial. Um HTML desorganizado vai 
funcionar como uma árvore que tem os troncos embaixo da terra e as folhas no caule. Por isso a estrutura do HTML é tão importante.

### * Atributos nas tags HTML:
  + Nesse tópico eu vou introduzir sobre os atributos HTML, mas, por serem MUITOS, conforme a gente for precisando deles, eu vou explicando o que eles fazem.
  + Atributos são importantíssimos no HTML, têm diversas funções a depender do atributo. Desde servir como maneiras de seleção dos conteúdos do HTML em outras plataformas, 
  como o CSS ou Javascript, por meio dos seletores, até para uma validação prévia de campos dentro de um formulário. Assim como falado anteriormente, é importante estar sempre 
  praticando o HTML para ir pegando a 'manha' com os atributos. Nesse tópico, vou citar alguns deles. Vale lembrar que, tal qual as tags, vários atributos têm valor semântico 
  na aplicação, então é bom estar atento ao que se está fazendo com os atributos.
  + Os atributos são colocados dentro das tags de abertura, conforme o exemplo: 
  
  `<h1 id="title">Título principal da página</h1>`
  
  + A maioria dos atributos trabalham com a atribuição de valores, como no exemplo acima, que id = "title". Alguns atributos não precisam de valores, mas vamos ver mais à frente.
  
  + **id**: é um atributo que recebe como argumento o identificador do elemento. O id serve, principalmente, para distinguir um elemento na hora de selecionar ele na hora de 
  estilizar no CSS ou pegar um único elemento no Javascript para fazer alguma interação com ele. Um id só pode ser colocado em um único elemento, afinal, não faz sentido algum 
  mais de um elemento ter o mesmo id, não é?
  
  + **class**: assim como o id, ele serve, principalmente, como um seletor no CSS e Javascript. Mas no caso das classes, elas não selecionam apenas um elemento. Você pode adicionar 
  uma classe a quantos elementos você quiser e essa é a principal funcionalidade dela. Selecionar vários elementos e _classificá-los_. Ela, assim como o id, recebe um valor, que 
  será o nome da classe.
  
  + **name**: é, como o nome sugere, o nome do elemento. Por exemplo usado pelo servidor para identificar os campos no envio do formulário, sendo essa a sua principal funcionalidade.
  
  + **title**: contém textos representando informações de orientação, relacionados à tag que ele é colocado. Geralmente, esta informação pode ser 
  apresentada ao usuário como uma dica.
  
  + Esses quatro atributos são globais, isso significa que podem ser colocados em qualquer tag. Existem diversos outros atributos que têm funcionalidades em outras áreas, 
  como nas tabelas - em seus campos - botões, imagens e vídeos, mas veremos eles conforme formos avançando no conteúdo.
