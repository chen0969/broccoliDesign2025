<!-- src/views/Home.vue -->
<script setup>
// objects
import PositionSwitcher from '@/components/Objects/TextSwitcher.vue';
import Blankspace from '../components/Objects/Blankspace.vue';

// sections
import DesShort from '@/components/S_des/DesShort.vue';
import DevShort from '@/components/S_dev/DevShort.vue';
import PhoShort from '@/components/S_pho/PhoShort.vue';

// 3d models
import ModelSwitcher from '@/components/Objects/ModelSwitcher.vue';

// icons
import IconSpin from '@/components/IconSpin.vue';

// animate
import 'animate.css';
</script>
<template>
  <!-- bg -->
  <div class="l-bg z--2 position-fixed top-0 start-0 w-100 h-100 overflow-hidden">
  </div>
  <IconSpin class="icon-spin-position w-100 overflow-hidden" />
  <ModelSwitcher class="model_position" />
  <!-- front -->
  <div class="container-fluid text-center">
    <div id="banner" class="row l-half-v">
      <div class="col-12">
        <h1 class="lexend-giga-900 mt-5">
          <span class="zcool-qingke-huangyou-regular text-center fs-4">Say hi to ....</span><br>
          Jing-An
        </h1>
        <PositionSwitcher />
        <p class="zcool-qingke-huangyou-regular text-center">Broccoli Design © 2024</p>
      </div>
    </div>
    <div class="row l-half-v">
      <div class="col-12">
        <button class="b-btn mt-5 mb-5"><a class="b-a zcool-qingke-huangyou-regular"
            href="https://canada-broccoli.github.io/canadabroccoli/" target="_blank">I want to play a game</a></button>
      </div>
    </div>
  </div>
  <!-- sections -->
  <div class="container-fluid">
    <!-- des -->
    <div class="row mt-5">
      <div class="col-md-12">
        <DesShort id="desShort" />
      </div>
    </div>
    <Blankspace />
    <!-- dev -->
    <div class="row mt-5">
      <div class="col-md-12">
        <DevShort id="devShort" />
      </div>
    </div>
    <Blankspace />
    <!-- Pho -->
    <div class="row mt-5">
      <div class="col-md-12">
        <PhoShort id="phoShort" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "bootstrap/dist/css/bootstrap.min.css" as *;
@use '../assets/scss/main.scss' as *;

@mixin fixed-position($bottom, $left) {
  position: fixed;
  bottom: $bottom;
  left: $left;
}

@mixin absolute-position($bottom, $left) {
  position: absolute;
  bottom: $bottom;
  left: $left;
}

.model_position {
  @include fixed-position(-25%, -5%);

  @media (max-width: 1080px) {
    @include fixed-position(-40%, -20%);
  }

  @media (max-width: 678px) {
    @include fixed-position(-50%, -10%);
  }

  @media (max-width: 375px) {
    @include fixed-position(-10%, -10%);
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