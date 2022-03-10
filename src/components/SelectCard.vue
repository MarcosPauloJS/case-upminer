<script setup>
  import briefcase from '@/assets/icons/briefcase.svg'
  import university from '@/assets/icons/university.svg'
  import gavel from '@/assets/icons/gavel.svg'
  import gem from '@/assets/icons/gem.svg'
  import globe from '@/assets/icons/globe.svg'
  import globe2 from '@/assets/icons/globe-v2.svg'
  import ban from '@/assets/icons/ban.svg'
  import male from '@/assets/icons/male.svg'
  import tree from '@/assets/icons/tree.svg'
  import piggy from '@/assets/icons/piggy.svg'

  const icons = {
    briefcase,
    gavel,
    university,
    gem,
    globe,
    globe2,
    ban,
    male,
    tree,
    piggy,
  }

  const props = defineProps({
    title: String,
    iconName: String,
  })
  
  const title = props.title;
  const iconName = props.iconName;
</script>

<template>
  <div class="select-card">
    <img class="select-card__img" :src="icons[iconName]" />
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
      transform: scale(1.2);
    }
  }

</style>