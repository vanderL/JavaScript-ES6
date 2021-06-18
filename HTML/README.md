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
    + head: O `<head>` de um documento HTML é a parte que não é exibida no navegador da Web quando a página é carregada. Nele, ficam informações valiosas, como as tags meta e a tag `<title>`, que vão ser faladas mais à frente.
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

 
## 2° dia - Como trabalhar com links em HTML / Trabalhando com imagens, vídeos e audios / Trabalhando com tabelas / Trabalhando com formulários:
 
### * Como trabalhar com links em HTML: 
+ Os links são o coração do HTML, eles que são os responsáveis pela navegação na internet, tanto em outras páginas, quanto na própria página, sendo assim, é importantíssimo 
 saber trabalhar com links. Portanto, vamos começar a falar deles agora.

 + Tag `<a>`: 
  + Essa é a tag utilizada para colocar links dentro da página HTML. É uma tag que precisa de fechamento, portanto o conteúdo dela deve ficar entre `<a>` e `</a>`.
  + A tag `<a>` é uma simplificação para "anchor", que significa âncora. Então ela serve para ancorar um conteúdo à página.
  + **Atributos:**
   + href: o atributo principal da tag âncora é o "href", que indica para onde aquele link deverá levar a pessoa que clicar nele. Ele é um atributo que recebe um argumento (como vimos anteriormente, atributos podem ou não receber argumentos, que são inseridos na forma (atributo = argumento)). O href recebe como argumento o link para qual a pessoa será levada, podendo ser uma URL (link de algum site usando o protocolo http / https) ou para endereços dentro do próprio domínio.
   + download: o atributo download, diferente do href, pode ou não receber argumentos, sendo assim, é um atributo auto-suficiente ou booleano. Ele é utilizado em conjunto com o href, mas tem a função primordial de, no lugar de fazer o usuário navegar por entre os links, tem a função de baixar o que o href está indicando. Sendo assim, ele que é usado quando se quer colocar algum arquivo para download dentro da sua aplicação. Assim que o usuário clicar no link que o href está levando, ele irá baixar o arquivo com o nome que for colocado nele. Para isso serve o argumento no download. O valor recebido será o nome do arquivo quando o usuário clicar para baixar. `<a href='./foto-de-cachorro.png' download="cachorro">Baixe a foto do cachorro</a>`. No caso do exemplo anterior, o arquivo, caso não se tivesse passado um argumento para "download", seria baixado com o nome 'foto-de-cachorro.png', mas como teve o valor modificado, será baixado com o nome 'cachorro.png'. E o link será exibido com o texto "Baixe a foto do cachorro".


![Foto de exemplo do texto anterior](./assets/exemplo-link-cachorro.png)
   
![Foto de exemplo do resultado do link](./assets/exemplo-link-cachorro-resultado.png)
   
![Foto de exemplo do download](./assets/download-cachorro-exemplo.png)

  + Você deve ter ficado se perguntando sobre o que é esse ./ na frente do arquivo, já que eu disse que os href recebem links. Pois bem, esse ./foto-do-cachorro.png é sim um link, contudo, é um link interno do seu projeto, não é um link da web. Os links recebidos, como eu falei mais em cima, podem ser tanto de pastas dentro do próprio projeto, como links da web. Vamos falar um pouco mais sobre navegação dentro da própria pasta do projeto.
    + Um projeto, como vocês devem imaginar, é feito dentro de uma pasta (directory). Nele, estão contidos todos os arquivos que constituem o site. Esse projeto, por exemplo, no momento que eu estou fazendo, está composto da seguinte forma:
    ![Imagem da pasta](./assets/pasta-exemplo.png)
    + Dentro da pasta-mãe JAVASCRIPT ES6, que é o nome dado para o projeto, existe uma pasta HTML, CSS e outras. Dentro da pasta HTML, tem uma pasta assets, que tem algumas imagens dentro dela, e mais dois arquivos: o index.html e o README. Para navegar dentro da pasta, são usados os pontos e as barras.
    
    + Por exemplo, para colocar as imagens do cachorro mais àcima, eu precisei usar o ./ (indica que se está procurando uma pasta dentro da pasta que já se está, que no caso é a pasta HTML, já que eu estou editando o arquivo README). Em seguida, eu uso o assets, para indicar que eu quero entrar na pasta assets. Ficando ./assets. Por fim, dentro da pasta assets, eu devo escolher um arquivo para mostrar. Sendo assim, vamos usar como exemplo a "exemplo-link-cachorro.png". Note que é necessário sempre colocar o tipo do arquivo (.png, .jpg, etc). No fim, então temos a estrutura `./assets/exemplo-link-cachorro.png`, que irá selecionar a imagem que eu desejo.
    
    + Pode parecer um pouco estranho de início, mas é rápido de acostumar. Agora vamos supor que eu estivesse na pasta "tipos de dados", mas quisesse pegar a mesma imagem "exemplo-link-cachorro.png". Usando o ./ eu só conseguiria navegar dentro da pasta "tipos de dados". Para sair dela, então, eu preciso voltar uma pasta, para isso, usa-se o ../
    
    + Viu como é simples? Depois do ../ deve-se usar o caminho para chegar até a imagem, então o caminho completo ficaria: `../HTML/assets/exemplo-link-cachorro.png`.

+ Atributo target: 
    + O atributo target é o responsável, como o nome sugere, de indicar o alvo do link. Ele é um atributo que aceita valores, e os valores que ele aceita são, principalmente, "_blank" e "_self".
    
    + O target = "_blank" terá o comportamento de, quando o usuário clicar no link, ele irá abrir o link em uma próxima página, é ideal para quando se está referenciando links de outras páginas, redes sociais e etc. Para, quando a pessoa clicar, abrir o link em uma outra aba, não retirando a sua página das abertas.

    + O target = "_self" tem o comportamento contrário ao _blank. Quando ele é utilizado, ao usuário clicar no link, ele redireciona, dentro da mesma janela, o usuário para o link clicado. É o ideal para navegações dentro do próprio site.

+ Esses são os principais atributos da tag `<a>`, e os que você deve prestar mais atenção para não acabar confundindo ou realizando uma ação indesejada dentro da sua aplicação.


### * Trabalhando com imagens, vídeos e áudios: 

#### -> **IMAGENS**: 
+ A tag `<figure>`: 
  
  + É uma tag que tem um valor puramente semântico. Ela não vai, de fato, colocar uma figura ou algo assim, mas serve para indicar que, aquilo que está dentro dela (a tag img e figcaption) são uma figura. A tag `<figure>` engloba as tags que forem ser colocadas para, de fato, colocar a iamgem no site ou descrevê-la.

+ A tag `<img>`: 
  
  + É uma tag que não necessita ser fechada, pois seu conteúdo não é colocado entre a abertura e fechamento da tag, mas sim em um atributo.

  + Atributos da tag `<img>`: 
    
    + src: 
      
      + O atributo src é o coração da tag image, é nele que você vai colocar o endereço para chegar na imagem, ele recebe argumentos de maneira semelhante ao href, podendo ser links externos (da web), ou internos, dentro do seu diretório (pasta) seguindo aquele modelo que foi citado anteriormente.
    
    + alt: 
      + O atributo alt também é um atributo que recebe argumentos. A pricipal funcionalidade dele é a acessibilidade. Para pessoas que não podem ver as imagens, o "alt" serve como uma descrição curta para elas. Sendo assim, tendo um papel importantíssimo na acessibilidade do seu site. Caso o site também não consiga carregar a imagem, o que será mostrado é o texto do "alt", como no modelo:   
      ![Logomarca do site]()

+ A tag `<figcaption>`:
  
  + Ao contrário da tag `<img>`, a tag figcaption precisa ser fechada, pois o conteúdo dela vem entre as tags. O figcaption serve para você descrever a sua imagem, colocar uma descrição mais longa sobre o que se trata a imagem.

+ Quando se está tratando com imagens no HTML, é sempre bom estar atento a algumas coisas. Quando você for colocar uma imagem no site, é de suma importância que ela não tenha direitos autorais, ou que os direitos autorais dela pertençam a você. É completamente indesejado que seu site saia do ar por problema de direitos autorais por conta de uma imagem que você colocou lá, não é? 

+ Também é importante ressaltar que as imagens, assim como todas as tags HTML, também recebem os atributos globais, que foram aqueles que a gente citou na aula passada: class, id, name, title, etc. No caso, esses atributos não terão função semântica na imagem, mas terão uma função muito importante de fazer o HTML ser identificado pelas outras linguagens. (Javascript, CSS, o backend). 

+ Por fim, é bom lembrar que imagens podem, por vezes, ser bem pesadas e fazer o site ficar lento para quem estiver usando, pois ela tanto vai demorar para baixar e ser exibida, quanto pode acabar afetando a performance de um navegador em um computador mais fraco, então é sempre bom ter cuidado com o peso das imagens que se está colocando na aplicação.

#### ->  **ÁUDIOS:**
  
  + A tag `<audio>`: 
    
    + Como o nome já sugere, esta tag serve para reproduzirmos uma mídia de áudio. A tag audio, diferente da tag `<img>`, precisa ser fechada. `<audio>` pode receber diversos atributos e vamos ver eles agora.
    + **Atributos**:
    
      + src: 
        + Assim como na tag `<img>`, o conteúdo do áudio é buscado por meio da tag src, onde você vai especificar o caminho que deverá ser seguido para acessar o seu áudio.
        `<audio src="./assets/audio/musica.mp3" autoplay> </audio>`
        
      + autoplay: 
        + Faz que o áudio comece a tocar assim que for baixado pelo navegador do usuário. É um atributo booleano ou auto-suficiente, o que significa que ele não recebe argumentos, é colocado sozinho.
        `<audio src="" autoplay> </audio>` 
      
      + controls: 
        + Faz surgirem no player de áudio, controles. Sendo assim, o usuário pode pausar, despausar, aumentar o volume e avançar. O atributo controls também é um atributo booleano.
      `<audio src="" controls> </audio>`
    
      + loop: 
        + Faz com que o áudio fique tocando em looping, ou seja, sempre que o áudio chegar ao fim, voltará para o começo. Também é um atributo booleano.
        `<audio src="" loop> </audio>`

      + muted: 
        + Faz com que o áudio tenha seu estado natural como mutado, então quando o usuário carregar a página e o áudio for devidamente carregado, ele não irá tocar de cara. O usuário irá precisar desmutar o áudio para ele começar a tocar. Também é um atributo booleano. 
      
    + Um player de áudio com "control" tem o seguinte formato:
    ![Imagem do player de áudio](https://www.devmedia.com.br/arquivos/artigos/26018/figura1.png)

#### **VÍDEOS:**

+ A tag `<video>`: 
    
    + Como o nome já sugere, esta tag serve para reproduzirmos uma mídia de vídeo. A tag video, diferente da tag `<img>`, precisa ser fechada. `<video>` pode receber diversos atributos e vamos ver eles agora.

    + **Atributos:**
      + src:
        + Assim como para áudios, recebe como argumento o caminho para chegar até o vídeo, podendo ser um link da web ou do próprio diretório (pasta do projeto). 
    
      + controls: 
        + Assim como no `<audio>`, a tag recebe o controls, que é um atributo booleano que faz com que os controles sejam mostrados para o usuário. 

      + autoplay: 
        + Assim como para áudios, esse atributo faz com que o vídeo comece a ser reproduzido assim que estiver pronto (devidamente carregado). É um atributo booleano.

      + loop:
        + Assim como para áudios, faz com que o vídeo, assim que chegar ao seu final, voltar desde o início e tocar novamente. É um atributo booleano.

      + poster:
        + O atributo poster recebe como argumento um link (da internet ou do próprio diretório) de uma imagem para ser exibida antes do vídeo começar a ser exibido (assim como no youtube com as thumbnails). A imagem colocada será retirada assim que o vídeo começar a ser reproduzido.

    + Assim como para imagens, é importante saber que usar essas tags sem restrição alguma pode interferir no desempenho da aplicação em alguns dispositivos. Além disso, é bom você dar uma olhada sobre quais navegadores aceitam quais tipos de arquivo. Existem navegadores que, por exemplo, não aceitam vídeos com a extensão .mp4, mas aceitam com a extensão .webm e .ogg. Nada que uns minutinhos de pesquisa não resolvam!

### * Como trabalhar com tabelas em HTML: 

+ Agora estamos chegando em uma parte **IMPORTANTÍSSIMA** do HTML. Não que as anteriores não fossem, mas as tabelas, assim como os formulários, que são o próximo tópico, são extremamente importantes.

+ As tabelas são uma das principais formas de se mostrar dados obtidos, processados ou não pelo Javascript ou outras linguagens de programação. Sendo assim, é de fundamental importância aprender a dominar as tabelas com maestria.

+ Existem algumas formas de construir tabelas em HTML, aqui, vou ensinar uma delas, a mais intuitiva.

+ Tabelas não são assim tão difíceis de operar, mas no começo pode parecer um pouco confuso.

+ Primeiramente, vamos re-lembrar como funciona uma tabela. Tabelas são compostas de linhas e colunas, confome o exemplo abaixo: 

![Imagem de tabela em branco](https://static.escolakids.uol.com.br/image/titulo-da-tabela.JPG)

+ No HTML não vai ser diferente disso, mas a gente vai ter que aprender a fazer isso em formato de código, certo?

+ **Estrutura de uma tabela:**
  + As tabelas, assim como os demais elementos no HTML, possuem uma tag. A tag da vez é a: 
    `<table>`: ela irá englobar a tabela (o conteúdo da tabela deverá ser colocado dentro dela), conforme o tópico a seguir.

  + **Cabeçalho e corpo:**
    + As tabelas em HTML são dividias em cabeçalho e corpo, assim como o documento HTML em si. As tags para representar essas partes são: 
      `<thead>`: tag para marcar o cabeçalho da tabela, nele, deverão estar contidos os títulos de cada coluna.
      `<tbody>`: tag para marcar o corpo da tabela, nele, devem estar os conteúdos da tabela de acordo com cada título.

    + Cabeçalho (`<thead>`): 
      + Dentro do `<thead>`, a gente deve criar uma linha e N colunas, conforme for necessário. 
      + Para isso, a gente deve usar as tags `<tr>` e `<th>`. 
        + `<tr>`: acrônimo para "table row", ou 'linha da tabela', indica a criação de uma linha.  
        + `<th>`: acrônimo para "table header", ou 'cabeçalho da tabela', indica a criação de uma célula-cabeçalho, ou título da coluna.
        + Isso vai ficar mais nítido quando a gente for ver na prática como funciona.

    + Corpo (`<tbody>`):
      + Dentro do `<tbody>` a estrutura é bastante parecida, mas no lugar de usar o `<th>`, a gente vai usar o `<td>`.
      + Da mesma forma que no cabeçalho, o `<tr>` servirá para criar novas linhas.
      + De maneira semelhante ao `<th>`, funciona o `<td>`.

      + Vamos ver um exemplo real de uma tabela que tudo vai ficar mais simples: 


        ~~~html 
          <table>
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>CPF</th>
                  </tr>
              </thead>

              <tbody>
                  <tr>
                      <td>João</td>
                      <td>joão@email.com</td>
                      <td>123.456.678.90</td>
                  </tr>

                  <tr>
                      <td>Maria</td>
                      <td>maria@email.com</td>
                      <td>098.765.432.10</td>
                  </tr>
                  <tr>
                      <td>Cléber</td>
                      <td>cleber@email.com</td>
                      <td>234.234.234.23</td>
                  </tr>
              </tbody>
          </table>
        ~~~
     
      + Essa tabela ficaria da seguinte forma: 

<table align="center">
    <thead>
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>João</td>
            <td>joão@email.com</td>
            <td>123.456.678.90</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>maria@email.com</td>
            <td>098.765.432.10</td>
        </tr>
        <tr>
            <td>Cléber</td>
            <td>cleber@email.com</td>
            <td>234.234.234.23</td>
        </tr>
    </tbody>
</table>

        -> É muito importante praticar! Faça uma tabela qualquer também!

+ Um pouco além de linhas e colunas: 
    + E se a gente tivesse um só título para duas informações para ele? Por exemplo, se uma pessoa tem mais de um telefone, como a gente faria? Só colocando o tr e td, não caberia. Para isso, existem os atributos das tabelas. 
    
    + rowspan: o rowspan informa quantas linhas uma informação irá ocupar.

    + colspan: o colspan informa quantas colunas uma informação irá ocupar.

    + Eles são usados da seguinte maneira: 
        + ~~~html
            <table>
                <thead>
                <tr>
                    <th>Primeiro Nome:</th>
                    <th> rowspan="2">Telefone:</th>
                </tr>
                </thead>
                <tr>
                    <td>Ted</td>
                    <td>8888-8888</td>
                    <td>9999-9999</td>
                </tr>
                <tr>
                    <td>Junior</td>
                    <td>1111-1111</td>
                    <td>2222-2222</td>
                </tr>
            </table>
          ~~~
    + O rowspan 'fala' pro navegador que a tabela deve ocupar 2 linhas, sendo assim, na linha de baixo não é passado  mais um cabeçalho, é passada mais uma informação do mesmo cabeçalho. Essa tabela fica assim:

<table border="3" align="center">
    <tr>
        <th>Nome</th>
        <th colspan="2">Telefones</th>
    </tr>
    <br>
    <tr>
        <td>Ted</td>
        <td>8888-8888</td>
        <td>9999-9999</td>
    </tr>
    <br>
    <tr>
        <td>Junior</td>
        <td>1111-1111</td>
        <td>2222-2222</td>
    </tr>
<table>

  + Só para fins informativos, também existe o `<tfoot>`, que serve para o rodapé da tabela. Ele funciona da mesma forma que os outros, não tem nenhuma tag especial relacionada a ele.


### * Como trabalhar com formulários em HTML: 

+ Se eu fosse eleger o tópico mais importante no HTML, certamente seria a parte de formulários. São eles que permitem a comunicação de dados entre o usuário tanto com o front-end (parte da interface), quanto o back-end (parte do servidor).

+ O que é um formulário? 
    + Você já deve ter se deparado com um monte de formulários pela frente. O formato mais conhecido deles é: 

<img src="https://i0.wp.com/www.cupcom.com.br/wp-content/uploads/2020/03/componente-login.jpg?resize=1024%2C576&ssl=1"></img>

  + Sim, o login em páginas, a criação de contas, a coletânea de feedback de um produto, e até os comentários de algumas plataformas são feitos por meio de formulários.

+ Os formulários são feitos com HTML e têm diversas funcionalidades e tags diferentes para eles. É um tópico bastante longo, então é bom <u>manter o foco.</u>

+ Um formulário deve ser envolvido entre as tags `<form>` e `</form>`.

+ O coração dos formulários são os campos de preenchimento (inputs), mas antes de falar deles, a gente deve prestar atenção em alguns fatores de acessibilidade para o nosso formulário.

+ Tags `<legend>` e `<fieldset>`:
    + O elemento `<fieldset>` é uma maneira conveniente de criar grupos que compartilham o mesmo propósito. O elemento `<legend>` descreve formalmente a finalidade do elemento `<fieldset>` ao qual está incluído.

            
~~~html
            
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
       (campos de input)
    </p>
    <p>
      (campos de input)
    </p>
    <p>
       (campos de input)
    </p>
  </fieldset>
</form>
            
~~~
  + Isso, ao ser mandado para um navegador, ficaria da seguinte forma: 

<form>
  <fieldset>
    <legend>legenda do formulário</legend>
    <p>
       (campos de input)
    </p>
    <p>
      (campos de input)
    </p>
    <p>
       (campos de input)
    </p>
  </fieldset>
</form>

+ Perceba que o legend completa o fieldset. Entenda o fieldset como sendo essa 'bordinha' de fora e o legend como sendo o conteúdo "legenda do formulário".

+ `<label for="">`: eu coloquei o atributo direto, porque sempre que você for usar um lable, ele estará acompanhado de um for. O for recebe o id do campo que se deseja atribuir o label. O label nada mais é que o título de cada campo (input). Também é uma questão de acessibilidade e é uma excelente prática utilizar os lables para todos os inputs.

+ `<input>`: até que enfim, chegamos no coração dos formulários, a tag que recebe os dados do usuário e permite uma infinidade de coisas serem feitas baseadas nisso.