<script setup>
  import BannerSpotlight from "@/components/BannerSpotlight.vue";
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
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
</template>

<style lang="scss">
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
</style>