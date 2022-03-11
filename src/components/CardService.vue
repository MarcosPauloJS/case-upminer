<script setup>
  import InlineSvg from 'vue-inline-svg';
  import ButtonGeneric from "@/components/ButtonGeneric.vue"
  import { computed } from "vue";

  const props = defineProps({
    title: String,
    iconUrl: String,
    resume: String,
    price: Number,
  })
  
  const title = props.title;
  const iconUrl = props.iconUrl;
  const resume = props.resume;
  const price = props.price;

   const valueFormated = computed( () => {
    const originalPrice = props.price ? props.price : 0
    return  originalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  });
</script>

<template>
  <div class="card-service">
    <div class="card-service__wrapper">
      <img class="card-service__img" :src="iconUrl" />
      <h1 class="card-service__title" >{{title}}</h1>
      <p class="card-service__resume" >{{resume}}</p>
    </div>
    
    <div class="card-service__button" width="100%" borderRadius="0px" :text="buttonText" @onClickButton="handleClickButton" >
        <span>{{valueFormated}}</span>
        <span>Saiba Mais</span>
    </div>
  </div>
</template>

<style lang="scss">
  @use "sass:map";
  @import "@/assets/scss/variables.scss";

  .card-service {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    min-height: 300px;
    height: fit-content;
    background-color: $background-color;
    box-shadow: 0px -2px 9px 0px rgba(0,0,0,0.4);
    border: none;
    border-radius: 3px;
    transition: 0.7s;
    cursor: pointer;
    overflow: hidden;
    padding: 30px 20px 80px 20px;
    margin: 0px 20px 50px 20px;

    &:hover {
      transition: 0.7s;
      transform: scale(1.05);
    }

    >.card-service__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;

      >.card-service__title {
        font-size: map.get($text-sizes, "medium");
        color: map.get($text-colors, "primary");
        font-weight: bold;
        margin-top: 10px;
      }

      >.card-service__resume {
        font-size: map.get($text-sizes, "small");
        text-align: center;
        margin-top: 10px;
      }

      >.card-service__img {
        width: 48px ;
        height: 48px ;
      }
    }

    >.card-service__button {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 5px 20px;
      font-size: v-bind(fontSize);
      background: map.get($gradients, "primary");
      color: map.get($text-colors, "light");
      border: none;


      @include small {
        flex-direction: column;
        align-items: center;
      }
    }
  }

</style>