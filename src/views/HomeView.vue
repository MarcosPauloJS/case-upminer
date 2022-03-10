<script setup>
  import BannerSpotlight from "@/components/BannerSpotlight.vue";
  import SelectCard from "@/components/SelectCard.vue";
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  const cardsSelect = [
    {name: 'Todos', icon: 'globe2', id: 0},
    {name: 'Profissional', icon: 'briefcase', id: 1},
    {name: 'Reguladores', icon: 'university', id: 2},
    {name: 'Sócio Ambiental', icon: 'tree', id: 3},
    {name: 'Jurídico', icon: 'gavel', id: 4},
    {name: 'Listas Restritivas', icon: 'ban', id: 4},
    {name: 'Mídia / Internet', icon: 'globe', id: 4},
    {name: 'Bens e Imóveis', icon: 'gem', id: 4},
    {name: 'Cadastro', icon: 'male', id: 4},
    {name: 'Financeiro', icon: 'piggy', id: 4},
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
    <SelectCard  v-for="card in cardsSelect" :key="card.id" :title="card.name" :iconName="card.icon" :id="card.id"/>
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
</style>