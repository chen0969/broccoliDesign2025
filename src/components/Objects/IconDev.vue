<script setup>
import {
    // web
    IconBrandWordpress,
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandSass,
    IconBrandVue,
    IconBrandVite,
    IconBrandLaravel,
    IconBrandPhp,
    IconBrandBootstrap,
    IconWorldWww,
    IconBrandReact,
    IconBrandGit,
    IconBrandNpm,
    IconBrandThreejs,
    IconBrandAppleFilled,
    IconBrandVscode,
    IconBrandGithubFilled,
    IconApi,
} from '@tabler/icons-vue';

const icons = [
    // web
    IconBrandWordpress,
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandSass,
    IconBrandVue,
    IconBrandVite,
    IconBrandLaravel,
    IconBrandPhp,
    IconBrandBootstrap,
    IconWorldWww,
    IconBrandReact,
    IconBrandGit,
    IconBrandNpm,
    IconBrandThreejs,
    IconBrandAppleFilled,
    IconBrandVscode,
    IconBrandGithubFilled,
    IconApi,
];
</script>

<template>
    <div class="icon__container">
    <div class="icon__item" v-for="(Icon, index) in icons" :key="index + Math.random()">
        <component :is="Icon" :size="50" stroke-width="1" />
    </div>
    </div>
</template>

<style lang="scss" scoped>
.icon {
    &__container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
    &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #f5f5f5;
        transition: transform 0.1s ease, box-shadow 0.3s ease;

        &:hover {
            transform: scale(0.9);
        }

        svg {
            color: #333;
        }
    }
}
</style>