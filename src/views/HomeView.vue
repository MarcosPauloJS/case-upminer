<script setup>
  import { useRouter } from 'vue-router'
  import { ref, reactive, onMounted, watchEffect } from 'vue'
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import BannerSpotlight from '@/components/BannerSpotlight.vue';
  import SelectCard from '@/components/SelectCard.vue';
  import CardService from '@/components/CardService.vue';
  import api from '@/utils/api.js'
  
  const router = useRouter()
  const data = reactive({services: [], tags: []})
  const AllCards = { name: 'Todos', iconUrl: 'https://firebasestorage.googleapis.com/v0/b/upminer-1e499.appspot.com/o/globe-v2.svg?alt=media&token=fe59e5eb-f8d7-4ad5-bea4-d644539692f4', id: 'todos'};
  const selectTag = ref('todos')
  const selectSearch = ref('')
  let services = [];

  const onSelect = (id, executeSearch = true) => {
    selectTag.value = id
    if(id === 'todos'){
      const dataForFiltering = executeSearch ? onSearch(selectSearch.value, false) : services
      data.services = dataForFiltering
      return dataForFiltering
    }
    
    const dataForFiltering = executeSearch ? onSearch(selectSearch.value, false) : services
    const dataFiltered = dataForFiltering.filter( service => service.id === id)
    data.services = dataFiltered

    return dataFiltered
  }

  const onSearch = (id, executeSearch = true) => {
    selectSearch.value = id
    if(id === ''){
      const dataForFiltering = executeSearch ? onSelect(selectTag.value, false) : services
      data.services = dataForFiltering
      return dataForFiltering
    }
    
    const filters = {
      LowestPrice: data => {
        return data.sort(function(a, b) {
          return a.price - b.price;
        });
      },
      biggestPrice: data => {
        return data.sort(function(a, b) {
          return b.price - a.price;
        });
      },
      recentlyReleased: data => {
        return data.sort(function(a, b) {
           return new Date(b.createAt) - new Date(a.createAt);
        });
      },
      lessRecent: data => {
        return data.sort(function(a, b) {
           return new Date(a.createAt) - new Date(b.createAt);
        });
      },
    }

    const dataForFiltering = executeSearch ? onSelect(selectTag.value, false) : services
    const dataFiltered = filters[id](dataForFiltering)
    data.services = dataFiltered

    return dataFiltered
  }

  const clickCard = (id) => {
    router.push(`/detalhes/${id}`)
  }


  onMounted(() => {
    api.get('/list')
      .then( response => {
        data.services = response.data.data
        data.tags = response.data.data.map( res => ({name: res.name, iconUrl: res.iconUrl, id: res.id}))
        services = response.data.data;
      });
  })
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
    <SelectCard v-for="card in [AllCards, ...data.tags]" :key="card.id" :title="card.name" :iconUrl="card.iconUrl" :id="card.id" :select="selectTag" :active="selectTag === card.id" @click="onSelect(card.id)"/>
  </div>

  <div class="search">
    <span class="search__label">ORDENAR</span>
    <select class="search__select" v-model="selectSearch" @change="onSearch(selectSearch)">
      <option value="">selecione ...</option>
      <option value="LowestPrice" >Menor Preço</option>
      <option value="biggestPrice" >Maior Preço</option>
      <option value="recentlyReleased" >Lançamento</option>
      <option value="lessRecent" >Antigos</option>
    </select>
  </div>

  <div class="cards-wrapper">
    <CardService v-for="card in data.services" :key="card.id" :title="card.name" :resume="card.resume" :price="card.price" :iconUrl="card.iconUrl" :id="card.id" @click="clickCard(card.id)"/>
  </div>
</template>

<style lang="scss">
  @use "sass:map";
  @import "@/assets/scss/variables.scss";

  :root {
    --vc-nav-background-color: #f16f13;
    --vc-clr-primary: #f16f13;
    --vc-clr-secondary: #e5a77a;
  }

  .search {
    display: flex;
    padding: 0 5%;
    margin-bottom: 10px;

    @include small {
      padding: 10px;
      justify-content: center;
    }

    .search__label {
      font-size: map.get($text-sizes, "medium");
      font-weight: bold;
      margin-right: 15px;
    }

    .search__select {
      width: 200px;
      border: 1px solid map.get($colors, "secondary");
      border-radius: 5px;
    }
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
    padding: 0 5%;
    margin-bottom: 40px;

    @include small {
      grid-template-columns: 1fr;
      padding: 0 10px;
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