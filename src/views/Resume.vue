<!-- src/views/Resume.vue -->
<script setup>
// sections
import DesShort from '../components/S_des/DesShort.vue';

// 3d models
import ModelBroccoli from '../components/ModelBroccoliResume.vue';
const orgBroccoli = "./models/broccoli-org.gltf";
const designBroccoli = "./models/broccoli-design.gltf";
const webBroccoli = "./models/broccoli-webdev.gltf";
const photoBroccoli = "./models/broccoli-photo.gltf";

// icons
import IconSpin from '../components/IconSpin.vue';

// animate
import 'animate.css';

</script>
<template>
  <!-- bg -->
  <div class="l-bg z--2 position-fixed top-0 start-0 w-100 h-100 overflow-hidden">
  </div>
  <IconSpin class="icon-spin-position" />
  <ModelBroccoli :model="orgBroccoli" :width="600" :height="600"
    class="model_position animate__animated animate__fadeInRight" />
  <!-- front -->
  <div class="container-fluid text-center gap-5">
    <div class="row l-half-v">
      <div class="col-12">
        <h1 class="lexend-giga-900 mt-5">Jing-An</h1>
        <h2 class="zcool-qingke-huangyou-regular">The designer</h2>
        <p class="zcool-qingke-huangyou-regular text-center">Broccoli Design © 2024</p>
      </div>
    </div>
    <div class="row l-half-v">
      <div class="col-12">
        <button class="b-btn mt-5 mb-5"><a class="b-a zcool-qingke-huangyou-regular"
            href="https://canada-broccoli.github.io/canadabroccoli/" target="_blank">Print the Resume</a></button>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row mt-5 mb-5">
      <div class="col-12">
        <DesShort />
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-12">
        <h1 class="lexend-giga-900">Develop</h1>
        <h2 class="zcool-qingke-huangyou-regular">With Jing-An</h2>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-12">
        <h1 class="lexend-giga-900">Photo</h1>
        <h2 class="zcool-qingke-huangyou-regular">With Jing-An</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "bootstrap/dist/css/bootstrap.min.css" as *;
@use '../assets/scss/main.scss' as *;

@mixin absolute-position($top, $right) {
  position: absolute;
  top: $top;
  right: $right;
}

.model_position {
  @include absolute-position(20%, 60%);

  @media (max-width: 1080px) {
    @include absolute-position(30%, 45%);
  }

  @media (max-width: 678px) {
    @include absolute-position(60%, -5%);
  }

  @media (max-width: 375px) {
    @include absolute-position(60%, -5%);
  }
}

.icon-spin-position {
  @include absolute-position(30%, 0%);

  @media (max-width: 1080px) {
    @include absolute-position(30%, 0%);
  }

  @media (max-width: 678px) {
    @include absolute-position(30%, 0%);
  }

  @media (max-width: 375px) {
    @include absolute-position(30%, 0%);
  }
}
</style>