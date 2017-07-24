# ReadMe!

## Demo
Uma versão com rotas motificadas pode ser vista [aqui](https://renanpallin.github.io/front-test-4/).
Nessa versão utilizamos HashRouters em vez de BrowserRouters por limitação do github pages.

## Rodando o projeto
```
  npm install
  npm start
```

## Tenologias utilizadas
 - React
 - SASS

## Estrutura do projeto
O projeto possui uma arquitetura simples. Dentro da pasta ```src``` temos o ```App.js```, entry point da aplicação e duas subpastas, a ```scenes``` e a ```scss```, detalhadas abaixo.
- ```scenes``` => Armazenam as páginas da SPA
- ```scss``` => Armazenam os aquivos de estilo da SPA

Não foi utilizado nenhum plugin ou framework css ou js para a construção da SPA.
### Estrutura do React
O projeto segue um padrão onde todos os módulos são diretórios com um index.js como entry point e pode conter um diretório chamado ```components``` para armazenar sub-módulos.

### Estrutura do SCSS
Dentro de ```src/scss``` encontramos diversos arquivos .scss. O entry point é o App.scss, onde todos os outros são importados. Foi utilizado o conceito Mobile First e a metodologia DRY (**D**on't **R**epeat **Y**ourself), buscando o reaproveitamento máximo de código e a máxima componetização.
Existe um arquivo para cada componente significativo no projeto (como o ```paginator```, o ```select```), um arquivo ```_general.scss``` onde encontra-se os estilos para os coponents mais comuns, um ```_variables.scss``` para todas as variáveis de cores e breakpoints e um arquivo específico para cada breakpoint utilizado.


##### Créditos
Foi utilizado um SVG para as setinhas das paginações e do custom select e gostaría de creditar e agradescer o autor.
Autor: https://www.flaticon.com/free-icon/next_126490

Foi utilizado o ```modernizr``` para aumentar a compatibilidade com browsers antigos.

---


# **Teste Desenvolvedor Front-End PL.**

> [![Logo Foster](http://www.foster.com.br/images/logo-foster-home.png)](http://www.foster.com.br/)

### Sobre o teste
Crie uma SPA (Single Page Application) utilizando AngularJS, Vue.js ou React, porém damos preferência para o AngularJS;

### Instruções
- Queremos que você crie uma SPA com as seguintes URL's (rotas):
	+ /home
	+ /news/:id
- Na URL /home implemente o layout disponível em: [/_layout/home](/_layout/home). Utilize o JSON (https://api.myjson.com/bins/a56hd) para listar, paginar e filtrar o conteúdo.
- Na URL /news/:newsId implemente o layout disponível em: [/_layout/internal](/_layout/internal). Escreva o conteúdo dinâmico de acordo com o clique feito na listagem da URL anterior;

### Material:
- Os layout's são apenas JPEG, pois o teste não requer recorte de imagens. Queremos avaliar a fidelidade do layout JPEG com o código entregue. É possível pegar as medidas através do JPEG, porém não se preocupe com o valor exato do tamanho das fontes;
- Para as imagens da /home, utilize a ferramenta de placeholder: https://placehold.it/;
- Utilize a fonte **Open Sans Regular** e **Open Sans Bold**: (https://fonts.google.com/specimen/Open+Sans).

### Esperamos que você:
- Desenvolva HTML semântico;
- Desenvolva o CSS utilizando mobile first e componentize seu CSS utilizando o conceito DRY;
- Não utilize nenhuma lib para o carousel, tabs, e paginação dos items;
- Utilize boas práticas de SEO;
- Dê suporte a IE10+, Chrome, Safari e Firefox.

### Você pode:
- Utilizar qualquer linguagem de pré-processador CSS (LESS, Stylus ou SASS), porém damos preferência por SASS + COMPASS;
- Utilizar um task runner de sua preferência;

### Breakpoints:
| Breakpoint | Descrição                    |
|------------|------------------------------|
| 320px      | Breakpoint para smartphones  |
| 768px      | Breakpoint para tablets      |
| 1024px     | Breakpoint para desktops     |

### Entre os critérios de avaliação estão:
- Usabilidade;
- Criatividade;
- Código limpo e organização;
- Documentação de código;
- Documentação do projeto (README);
- Performance.

### Envio do teste
Faça um fork deste repositório e depois envie a URL do seu teste no GIT por e-mail.

##### **Boa sorte!**
