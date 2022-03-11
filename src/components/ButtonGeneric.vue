<script setup>
  const emit = defineEmits(['onClickButton'])
  const props = defineProps({
    text: String, 
    color: String,
    borderRadius: String,
    padding: String,
    fontSize: String,
    width: String,
  });

  const text = props.text || 'Button';
  const color = props.color || '#FFF';
  const borderRadius = props.borderRadius || '3px';
  const padding = props.padding || '4px 15px';
  const fontSize = props.fontSize || '16px';
  const width = props.width || 'auto';
  

  const onClick = () => {
    emit('onClickButton');
  }
  
</script>

<template>
  <button class="button" @click="onClick" >
    {{text}}
  </button>
</template>

<style lang="scss">
  @use "sass:map";
  @import "@/assets/scss/variables.scss";

  .button {
    width: v-bind(width);
    font-size: v-bind(fontSize);
    padding: v-bind(padding);
    text-align: v-bind(textAlign);
    background: map.get($gradients, "primary");
    color: v-bind(color);
    border: none;
    border-radius: v-bind(borderRadius);
    cursor: pointer;
  }
</style>