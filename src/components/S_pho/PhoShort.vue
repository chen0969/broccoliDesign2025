<script setup>
// animate
import 'animate.css';

// components
import DeveloperSwitcher from '@/components/Objects/TextSwitcher.vue';
const myWords = ['For Products', 'For Business', 'For Events', 'For Memories'];

import ScrollRotate from '@/components/Objects/ScrollRotate.vue';

// img
import supply0V1 from '@/assets/medias/des/supply0-v1.png';
import supply0V2 from '@/assets/medias/des/supply0-v2.png';

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
                    <ScrollRotate class="col-6 col-md-4 p-5" :imgSrc="supply0V1" :rotateDeg="10" />
                    <ScrollRotate class="col-6 col-md-4 p-5" :imgSrc="supply0V2" :rotateDeg="10" />
                    <ScrollRotate class="col-6 col-md-4 p-5" :imgSrc="supply0V1" :rotateDeg="10" />
                    <ScrollRotate class="col-6 col-md-4 p-5" :imgSrc="supply0V2" :rotateDeg="10" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "bootstrap/dist/css/bootstrap.min.css" as *;
@use '../../assets/scss/main.scss' as *;
</style>