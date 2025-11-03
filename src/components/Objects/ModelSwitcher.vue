<script setup>

import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';
import ModelBroccoli from '@/components/ModelBroccoli.vue';
import 'animate.css';
import { useAnimateCSS } from '@/assets/js/animeCSS';
import { observeSections } from '@/assets/js/ObserveSections';

// Absolute URLs because the models are in /public/models
// models and scroll
const models = [
  '/models/broccoli-org.gltf',
  '/models/broccoli-design.gltf',
  '/models/broccoli-webdev.gltf',
  '/models/broccoli-photo.gltf'
];
const currentModel = ref(models[0]);
const scrollState = reactive({ index: 0 });
let observer;
// animate

const intial = async () => {
  await useAnimateCSS('#modelBroccoli', 'fadeInRight');
  console.log('Animation complete!');
}


onMounted(() => {
  intial();
  observer = observeSections(['banner','desShort', 'devShort', 'phoShort'], models, currentModel, scrollState);
})

onBeforeUnmount(() => {
  observer?.disconnect();
})
</script>

<template>
    <ModelBroccoli id="modelBroccoli" :model="currentModel" :key="currentModel" :width="600" :height="600"/>
</template>

<style lang="scss" scoped>
@use "bootstrap/dist/css/bootstrap.min.css" as *;
@use '@/assets/scss/main.scss' as *;
</style>