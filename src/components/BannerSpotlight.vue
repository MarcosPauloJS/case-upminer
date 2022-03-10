<script setup>
  import ButtonGeneric from "@/components/ButtonGeneric.vue"
import { reactive, computed, toRefs } from "vue";
  const emit = defineEmits(['onClickButtonBanner'])
  const props = defineProps({
      title: String, 
      resume: String, 
      price: Number, 
      backgroundUrl: String,
      buttonText: String,
    });

  const buttonText = props.buttonText || ''
  const backgroundUrl = props.backgroundUrl ? `url('${props.backgroundUrl}')`: ''
  const title = props.title || ''
  const resume = props.resume || ''

  const handleClickButton = function() {
    emit('onClickButtonBanner')
  }

  const valueFormated = computed( () => {
    const originalPrice = props.price ? props.price : 0
    return  originalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  });
</script>

<template>
  <div class="banner-spotlight">
    <span class="brand" >
      <img class="brand__img" src="@/assets/img/logo_upminer.png" />
      <h1 class="brand__title">{{title}}</h1>
    </span>
    <p class="banner-spotlight__resume">
      {{resume}}
    </p>

    <div class="banner-spotlight__footer">
      <span class="banner-spotlight__footer__value">
        {{valueFormated}}
      </span>
      <ButtonGeneric :text="buttonText" @onClickButton="handleClickButton"/>
    </div>
  </div>

</template>

<style lang="scss">
  @use "sass:map";
  @import "@/assets/scss/variables.scss";

  .banner-spotlight {
    width: 100vw;
    height: 240px;
    background-color: $background-color;
    background-image: v-bind(backgroundUrl);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 30px 70px;
    color: map.get($text-colors, "light");
    border-bottom: 5px solid map.get($colors, "primary");

    @include small {
      height: 420px;
      padding: 30px;
    }

    @include medium {
      height: 270px;
      padding: 30px;
    }

    >.brand {
      display: flex;
      align-items: end;
      max-width: 480px;
      line-height: 36px;

      @include small {
        align-items: start;
        flex-direction: column;
      }

      >.brand__title {
        font-size: map.get($text-sizes, "bigger");
        padding-left: 20px;
        border-left: 1px solid #696969;
        margin-left: 20px;

        @include small {  
          margin-left: 0px;
          margin-top: 10px;
          padding-left: 0px;
          border: none;
        }
      }

      >.brand__img {
        width: 130px;
        height: 42px;
      }
    }
    
    >.banner-spotlight__resume {
      margin-top: 30px;
      font-size: map.get($text-sizes, "samll");
      width: 80vw;
      max-width: 700px;
      text-align: start;

      @include small {
        margin-top: 10px;
      }
    }

    >.banner-spotlight__footer {
      display: flex;
      align-items: center;
      margin-top:10px;
      
      @include small {
        align-items: start;
        flex-direction: column;
      }

      >.banner-spotlight__footer__value {
        margin-right: 30px;
        font-size: map.get($text-sizes, "biggest");
   
        @include small {
          font-size: map.get($text-sizes, "bigger");
        }
      }
    }
  }
</style>
