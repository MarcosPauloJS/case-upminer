# case upMiner
### Uma case de desafio para uma vaga front end

Design da case:


![image challenge](https://i.imgur.com/0r9Xbmy.jpg)

requisitos:
- Implementar rotatividade automática no carrosel de banners (1).
- Exibir uma nova Página de Detalhes ao clicar no botão "Saiba Mais" (2) de cada Card 
(Levando as informações fornecidas dentro do card para a Página de Detalhes).
- Página Principal: Filtrar os cards ao clicar em uma categoria da barra cinza (3)
(Destacando em laranja a categoria selecionada).
- Página Principal: Ordenar os cards ao selecionar a opção (Preço ou Lançamento) 
dentro do INPUT SELECT (4).
- Implementar o layout responsivo para os breakpoints 480px e 1200px.
- Utilizar um framework JS (React/Angular/Vue).
- disponibilizar codigo em um repositorio publico do github
- instruções de como executar seu códig

Tecnologias front end utilizadas: 
- Vue.js para contruir o front end
- sass e sass-loader (todos os componetes utilizam scss)
- BEM (Todo o estilo foi aplicado seguindo alguns conceitos da metodologia BEM)
- vue-router (modulo do vue que foi utilizado para navegação)
- vue3-carousel (esta lib foi utilizadfa para os carrosel com algumas modificações no scss)
- axios (todas as requisições a api foram feitas por meio do axios)

Tecnologias back end utilizadas:
 - serverless framework (utilizado para facilitar a criação da api)
 - aws lambda
 - banco de dados SQL no rds da aws

Como rodar o projeto
1. baixe o zip do [repositorio](https://github.com/MarcosPauloJS/case-upminer) ou faça o clone do repositorio ```git clone https://github.com/MarcosPauloJS/case-upminer.git```
2. com o node intalado rode o comando ```npm run dev```
3. abra o navegador e abra no endereço [http://localhost:3000](https://pages.github.com/)
