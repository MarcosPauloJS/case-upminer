<script setup>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import BannerSpotlight from "@/components/BannerSpotlight.vue";
  import SelectCard from "@/components/SelectCard.vue";
  import CardService from "@/components/CardService.vue";

  const cardsSelect = [
    {name: 'Todos', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/globe-v2.svg?alt=media&token=fe59e5eb-f8d7-4ad5-bea4-d644539692f4', id: 0, resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', price: 40},
    {name: 'Profissional', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/briefcase.svg?alt=media&token=c2ea7b0f-e374-47c1-9c00-535de4ff30f5', id: 1, resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', price: 40},
    {name: 'Reguladores', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/university.svg?alt=media&token=cf1816b5-fe36-4e93-9a98-237c4d0ec3c8', id: 2, resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', price: 40},
    {name: 'Sócio Ambiental', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/tree.svg?alt=media&token=c5dccaaf-4e3c-400b-bdfb-68685754ab48', id: 3, resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', price: 40},
    {name: 'Jurídico', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/gavel.svg?alt=media&token=2be2aa54-d1bf-4d4a-b553-331297f038ac', id: 4, resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', price: 40},
    {name: 'Listas Restritivas', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/ban.svg?alt=media&token=ba4e1a0c-bc3c-424c-a37d-873a9a3afa41', id: 5, resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', price: 40},
    {name: 'Mídia / Internet', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/globe.svg?alt=media&token=dd1307e5-0e43-483d-8747-d36541994070', id: 6, resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', price: 40},
    {name: 'Bens e Imóveis', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/gem.svg?alt=media&token=d1c52e0c-472d-4989-9d76-89cc24e11f06', id: 7, resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', price: 40},
    {name: 'Cadastro', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/male.svg?alt=media&token=a9a4c08d-689e-400e-8bcd-54f539c4c2b9', id: 8, resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', price: 40},
    {name: 'Financeiro', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/piggy.svg?alt=media&token=ab3f2e1e-5df7-4f7c-95a7-c3c82ff3a8b7', id: 9, resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', price: 40},
  ]
</script>

<template>
  <carousel :autoplay="3000">
      <slide key="banner1">
        <BannerSpotlight 
          title="Histórico Empresarial"
          resume="O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação" 
          :price="80"
          buttonText="Saiba mais" 
          backgroundUrl="https://i.imgur.com/RLzYAdf.png"
        />
      </slide>

      <slide key="banner2">
        <BannerSpotlight 
          title="Reguladores"
          resume="O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte." 
          :price="40"
          buttonText="Saiba mais" 
          backgroundUrl="https://i.imgur.com/X2jMOIO.png"
        />
      </slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
  </carousel>

  <div class="selectTag">
    <SelectCard  v-for="card in cardsSelect" :key="card.id" :title="card.name" :iconUrl="card.iconUrl" :id="card.id"/>
  </div>

  <div  class="cards-wrapper">
    <CardService v-for="card in cardsSelect" :key="card.id" :title="card.name" :resume="card.resume" :price="card.price" :iconUrl="card.iconUrl" :id="card.id"/>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/variables.scss";

  :root {
    --vc-nav-background-color: #f16f13;
    --vc-clr-primary: #f16f13;
    --vc-clr-secondary: #e5a77a;
  }
  
  .carousel__prev--in-active,
  .carousel__next--in-active {
    display: none;
  }

  .carousel__prev,.carousel__prev--in-active {
    transform: translate(50%, -50%);
  }

  .carousel__next,.carousel__next--in-active {
    transform: translate(-50%, -50%);
  }

  .selectTag {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding: 30px;

    @include small {
      grid-template-columns: 1fr;
      padding: 10px;
    }

    @include medium {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .cards-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
  }
</style>