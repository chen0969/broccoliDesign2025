<script setup>
// animate
import 'animate.css';

// components
import DeveloperSwitcher from '@/components/Objects/TextSwitcher.vue';
const myWords = ['For Products', 'For Business', 'For Events', 'For Memories'];

import ScrollRotate from '@/components/Objects/ScrollRotate.vue';
import ImgSpinner from '@/components/Objects/ImgSpinner.vue';

// img
import Disexpo from '@/assets/medias/pho/dis-expo.jpg';
import Displate from '@/assets/medias/pho/dis-plate.jpg';
import Filmstyle from '@/assets/medias/pho/filmstyle.jpg';
import Freebird from '@/assets/medias/pho/free-bird.jpg';
import Freeparlbird from '@/assets/medias/pho/free-parl-bird.jpg';

</script>

<template>
    <div class="container-fluid text-center overflow-hidden">
        <div class="row g-5">
            <div class="col-md-4 d-flex flex-column justify-content-start align-items-end">
                <h1 class="lexend-giga-900">Photo</h1>
                <DeveloperSwitcher :texts="myWords" />
            </div>
            <div class="col-md-8">
                <div class="row g-4">
                    <ScrollRotate class="col-6 col-md-6 p-5" :imgSrc="Filmstyle" :rotateDeg="10" />
                    <ScrollRotate class="col-6 col-md-6 p-5" :imgSrc="Freebird" :rotateDeg="10" />
                    <ScrollRotate class="col-6 col-md-4 p-5" :imgSrc="Disexpo" :rotateDeg="10" />
                    <ScrollRotate class="col-6 col-md-5 p-5" :imgSrc="Freeparlbird" :rotateDeg="10" />
                    <ScrollRotate class="col-6 col-md-3 p-5" :imgSrc="Displate" :rotateDeg="10" />
                </div>
                <div class="row">
                    <ImgSpinner class="col-12" />
                </div>
                <div class="row g-4">
                    <ScrollRotate class="col-6 col-md-4 p-5" :imgSrc="Disexpo" :rotateDeg="10" />
                    <ScrollRotate class="col-6 col-md-4 p-5" :imgSrc="Displate" :rotateDeg="10" />
                    <ScrollRotate class="col-6 col-md-4 p-5" :imgSrc="Disexpo" :rotateDeg="10" />
                    <ScrollRotate class="col-6 col-md-4 p-5" :imgSrc="Displate" :rotateDeg="10" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "bootstrap/dist/css/bootstrap.min.css" as *;
@use '../../assets/scss/main.scss' as *;
</style>