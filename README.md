# case upMiner
### Uma case de desafio para uma vaga front end

## Design da case:

![image challenge](https://i.imgur.com/0r9Xbmy.jpg)

## Requisitos:
- Implementar rotatividade automática no carrossel de banners (1).
- Exibir uma nova Página de Detalhes ao clicar no botão "Saiba Mais" (2) de cada Card 
(Levando as informações fornecidas dentro do card para a Página de Detalhes).
- Página Principal: Filtrar os cards ao clicar em uma categoria da barra cinza (3)
(Destacando em laranja a categoria selecionada).
- Página Principal: Ordenar os cards ao selecionar a opção (Preço ou Lançamento) 
dentro do INPUT SELECT (4).
- Implementar o layout responsivo para os breakpoints 480px e 1200px.
- Utilizar um framework JS (React/Angular/Vue).
- disponibilizar código em um repositório público do github
- instruções de como executar seu código

## Tecnologias front end utilizadas: 
- Vue.js para construir o front end
- sass e sass-loader (todos os componentes utilizam scss)
- BEM (Todo o estilo foi aplicado seguindo alguns conceitos da metodologia BEM)
- vue-router (modulo do vue que foi utilizado para navegação)
- vue3-carousel (esta lib foi utilizada para o carrossel com algumas modificações no scss)
- axios (todas as requisições a api foram feitas por meio do axios)
- heroku (usado no deploy)

## Tecnologias back end utilizadas:
 - serverless framework (utilizado para facilitar a criação da api)
 - aws lambda
 - nodejs
 - mySql
 - banco de dados  mySQL no rds da aws

## Como acessar o projeto (deixarei esse projeto em deploy por 30 dias apos a entrega do desafio)
e possivel acessar o projeto pela url [https://up-miner.herokuapp.com/](https://up-miner.herokuapp.com/)

## Como rodar o projeto
1. baixe o zip do [repositório](https://github.com/MarcosPauloJS/case-upminer) ou faça o clone do repositório ```git clone https://github.com/MarcosPauloJS/case-upminer.git```
2. com o node instalado rode o comando ```npm run dev```
3. abra o navegador e abra no endereço [http://localhost:3000](https://pages.github.com/)

## Desafios enfrentados
 E normal em um projeto enfrentarmos uma série de desafios e imprevistos, além deles impus alguns desafios a mais nesse 
projeto sendo fazer um backend serverless com os serviços da aws algo que nunca desenvolvi.

 Alguns dos desafios técnicos foi usar vuejs e um framework que não domino, além disso, utilizei o vue na versão 3 que muda 
bastante coisa da versão 2 uma delas foi a [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) que particularmente
gostei muito com ela e possível escrever códigos mais curtos e com uma estrutura mais voltada ao funcional. Outro desafio do front foi as configurações do ambiente de desenvolvimento tive alguns problemas para configurar o scss.
 No backend toda a parte de serveless era algo novo para mim então o mais trabalhoso foi fazer as configurações da aws o código em si da api foi bem simples
 
## Conclusões
 Foi um projeto bem legal nessa semana aprendi muito não apenas tecnicamente, mas pessoalmente também conseguir entender bem os meus limites e o tempo que levo para realizar as tarefas de escopo muito amplo e lidar planejamento macro, tive problemas com o prazo por que adicionei complexidade ao projeto  fiz no meu horário livre altas horas sem dormir, sempre pensava vou fazer só mais essa funcionalidade e neste ponto entendo que saio com mais maturidade para mensurar melhor toda essa gestão e planejamento antes de ir para o código de fato.
