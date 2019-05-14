# frontend-challenge-mobile-lucas

# Inicializando o app 😃


  <ol>
    <li>Faça o clone do repositório com comando: git clone https://github.com/isacjunior/frontend-challenge-mobile-lucas.git</li>
    <li>Entre na pasta do aplicativo</li>
    <li>Execute o comando npm install -- vai instalar as dependencia do projeto</li>
    <li>Execute na linha de comando: react-native run-ios. Caso você desejar, pode rodar o simulador com uma versão mais leve  com o comando: react-native run-ios --simulator="iPhone 8"</li>
    <li>O app está dividido em 2 duas telas. A tela principal que mostra todos os filmes e a tela que mostra dados específicos do filme</li>
    <li>Como o site sugerido não estava fornecendo as API's corretamente, no projeto foi usado uma API privada, por isso não foi possível mostrar detalhes na tela do filme. Realizei o que foi pedido do desafio, isto é, a integração e propagação da API </li>

  </ol>



# HISTÓRICO DE CRIAÇÃO 
O aplicativo foi iniciado normalmente com os comando:

`React-native init ZupProject`

Após a inicialização do projeto, foi feito a estruturação das pastas para o modelo MVC de projeto. Boas práticas de programação em frameworks para facilitar o entendimento de quem analisa. O projeto desenvolvido se encontra dentro da pasta  ~/src. 

A primeira dependência instalada foi o Router-flux para facilitar o trabalho de navegação entre telas, com o comando:

`npm install --save react-native-router-flux`

Após configurado o router flux foi desenhado as telas segundo os mockups enviados no desafio.

Finalizada a construção hardcoded dos mockups, se iniciou a integração com a API. Para isso, é necessário instalar a dependência do Axios com o comando:

`npm install —save axios`

Dessa forma podemos fazer requisições HTTP (Get, post, put, delete) na API. Para fazer a requisição, o link principal da API foi colocado no arquivo ~ App.js, juntamente com a chamada do componente das rotas.

Dentro do componente ~/src/home.js no componentDidMount foi feita a requisição da rota pelo método GET.
Observação: foi usada uma API fictícia de cursos para arquitetos, criada por mim em Laravel. 💥
