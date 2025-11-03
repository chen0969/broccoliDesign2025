<script setup>
// animate
import 'animate.css';
import IconDev from '@/components/Objects/IconDev.vue';
// components
import DeveloperSwitcher from '@/components/Objects/TextSwitcher.vue';
const myWords = ['For Wordperess', 'For UI/UX', 'For Users', 'For Everyone'];

</script>

<template>
    <div class="container-fluid text-center overflow-hidden">
        <div class="row g-5">
            <div class="col-md-4 d-flex flex-column justify-content-start align-items-end">
                <h1 class="lexend-giga-900">Develop</h1>
                <DeveloperSwitcher :texts="myWords" />
            </div>
            <div class="col-md-8">
                <div class="row g-5">
                    <div class="col-md-12">
                        <IconDev />
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