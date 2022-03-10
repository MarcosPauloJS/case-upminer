<script setup>
  const props = defineProps({
    title: String,
    iconUrl: String,
  })
  
  const title = props.title;
  const iconUrl = props.iconUrl;
</script>

<template>
  <div class="select-card">
    <img class="select-card__img" :src="iconUrl" />
    <h3 class="select-card__title">
      {{title}}
    </h3>
  </div>
</template>

<style lang="scss">
  @use "sass:map";
  @import "@/assets/scss/variables.scss";

  .select-card {
    display: inline-block;
    background-color: map.get($colors, "light");
    text-align: center;
    border: 1px solid #ebebeb;
    border-radius: 2px;
    padding: 10px;
    flex: 1;
    transition: 0.7s;
    cursor: pointer;

    
    &:hover {
      transition: 0.7s;
      background-color: map.get($colors, "primary");
      margin: 0 5px;
      transform: scale(1.1);
    }

    @include small {
      margin: 3px;
    }

    @include medium {
      margin: 3px;
    }

    >.select-card--active {
      background-color: map.get($colors, "primary");
    }

    >.select-card__title {
      font-size: map.get($text-sizes, "smallest");
    }

    >.select-card__img {
      width: 32px ;
      height: 32px ;
    }
  }

</style>