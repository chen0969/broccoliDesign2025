<script setup>
// animate
import 'animate.css';
// components
import DesignSwitcher from '@/components/Objects/TextSwitcher.vue';
const myWords = ['For Start-Ups', 'For Products', 'For Users', 'For Everyone'];

import DesSvgBroccoli from '@/components/DesSvgBroccoli.vue';

// img
import ncdBrand from '@/assets/medias/des/ncd-brand.jpg';
import sharpfle from '@/assets/medias/des/sharpfle-buttle.jpg';
import supply0Fin from '@/assets/medias/des/supply0-logo.png';
import supply0V1 from '@/assets/medias/des/supply0-v1.png';
import supply0V2 from '@/assets/medias/des/supply0-v2.png';
import supply0V3 from '@/assets/medias/des/supply0-v3.png';
import mockup1 from '@/assets/medias/des/mockup.png';
import solidworks from '@/assets/medias/des/solidworks-model.png';

</script>

<template>
    <div class="container-fluid text-center overflow-hidden">
        <div class="row g-5">
            <div class="col-md-4 d-flex flex-column justify-content-start align-items-end">
                <h1 class="lexend-giga-900">Design</h1>
                <DesignSwitcher :texts="myWords" />
                <DesSvgBroccoli :width="100" :height="100" />
            </div>
            <div class="col-md-8">
                <div class="row g-md-3 g-5">
                    <div class="col-md-12">
                        <img :src="ncdBrand" alt="ncd img">
                    </div>
                    <div class="col-md-2 col-4">
                        <img :src="supply0V1" alt="supply0 v1">
                    </div>
                    <div class="col-md-2 col-4">
                        <img :src="supply0V2" alt="supply0 v2">
                    </div>
                    <div class="col-md-2 col-4">
                        <img :src="supply0V3" alt="supply0 v3">
                    </div>
                    <div class="col-md-6">
                        <img :src="supply0Fin" alt="supply0 fin">
                    </div>
                    <div class="col-md-6">
                        <img :src="sharpfle" alt="sharpfle img">
                    </div>
                    <div class="col-md-3 col-6">
                        <img :src="mockup1" alt="mockup img">
                    </div>
                    <div class="col-md-3 col-6">
                        <img :src="solidworks" alt="solidworks img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "bootstrap/dist/css/bootstrap.min.css" as *;
@use '../../assets/scss/main.scss' as *;
</style>