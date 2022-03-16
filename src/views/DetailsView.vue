<script setup>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import { computed } from "vue";
  import 'vue3-carousel/dist/carousel.css';
  import BannerSpotlight from "@/components/BannerSpotlight.vue";
  import ButtonGeneric from "@/components/ButtonGeneric.vue";
  import ArrowLeft from '@/assets/icons/arrow-left.svg'

  const details = {
    name: 'Profissional', 
    iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/globe-v2.svg?alt=media&token=fe59e5eb-f8d7-4ad5-bea4-d644539692f4', 
    id: 0,
    content: '<p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação. Tenha acesso aos principais eventos corporativos de uma empresa, como: marcos jurídicos, mudança no quadro societário, aumento de capital,reportagens e muito mais.</p> <p>Após realizar a consulta, o histórico é salvo automaticamente, tornando as informações acessíveis ao usuário. A linha do tempo pode também ser exportada no formato PDF</p>',
    resume: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.', 
    price: 40,
    imgs: [
      'https://cdn.pixabay.com/photo/2016/05/21/04/37/pudding-1406386_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/05/21/04/37/pudding-1406386_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/05/21/04/37/pudding-1406386_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/05/21/04/37/pudding-1406386_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/05/21/04/37/pudding-1406386_960_720.jpg',
    ]
  }

  const settings = {
    itemsToShow: 2,
    snapAlign: 'left',
    autoplay: 3000,
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 2,
        snapAlign: 'start',
      }
    }
  }

  const valueFormated = computed( () => {
    const originalPrice = details.price ? details.price : 0
    return  originalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  });
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
  
  <man class="article">
    <router-link class="article__back-button" :to="{ path: '/' }">
      <img class="article__back-button__img" :src="ArrowLeft" />
      {{details.name}}
    </router-link>

    <carousel class="article__gallery" :settings="settings">
        <slide v-for="(imgUrl, index) in details.imgs" :key="index">
          <div class="carousel__item article__gallery__carousel">
            <img class="article__gallery__carousel__img" :src="imgUrl" />
          </div>
        </slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
    </carousel>
    
    <section class="article__content" v-html="details.content">
    </section>

    <div class="article__footer">
      <span class="article__footer__price">
        {{valueFormated}}
      </span>
      <ButtonGeneric text="Habilitar"/>
    </div>
  </man>
</template>

<style lang="scss">
  @use "sass:map";
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

  .article {
    display: block;
    margin: 0 auto;
    width: 90%;
    max-width: 1260px;

    .article__gallery {
      .article__gallery__carousel {
        width: 80%;

        .article__gallery__carousel__img {
          width: 100%;
          max-width: 600px;
        }
      }

      .carousel__prev,.carousel__prev--in-active,.carousel__next,.carousel__next--in-active {
        background: none;
        color:  map.get($colors, "secondary");
      } 

      .carousel__prev,.carousel__prev--in-active {
        transform: scale(3, 3.5) translate(-10%, -15%);
      } 

     .carousel__next,.carousel__next--in-active {
        transform: scale(3, 3.5) translate(10%, -15%);
      }

      @include small {
        .carousel__prev,.carousel__prev--in-active {
          transform: scale(1.5, 2) translate(-7%, -47%);
        }

        .carousel__next,.carousel__next--in-active {
          transform: scale(1.5, 2) translate(7%, -47%);
        }
      }
    }

    .article__back-button {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: map.get($colors, "primary");
      font-size: map.get($text-sizes, "big");
      margin-bottom: 30px;

      .article__back-button__img {
        margin-right: 10px;
      }
    }

    .article__content {
      width: 96%;
      margin: 30px auto;
      color: map.get($colors, "secondary");

      p {
        margin-bottom: 10px;
      }
    } 

    .article__footer {
      width: 96%;
      margin: 30px auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      @include small {
        justify-content: center;
      }

      .article__footer__price {
        color: map.get($colors, "primary");
        font-size: map.get($text-sizes, "bigger");
        margin-right: 20px;
      }
    }
  }
</style>