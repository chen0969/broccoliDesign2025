<script setup>
import {
    IconBrandAdobeIllustrator,
    IconBrandAdobePhotoshop,
    IconBrandAdobeIndesign,
    IconBrandAdobePremier,
    IconBrandAdobeAfterEffect,
    IconBrandAdobeXd,
    IconBrandAdobe,
    IconBrandFigma,
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
    // design
    IconBrandBlender,
    // media
    IconBrandYoutubeFilled,
    IconBrandLinkedinFilled,
    IconBrandWhatsappFilled,
    IconBrandInstagramFilled,
    IconBrandMeta,
    IconDeviceGamepad2,
} from '@tabler/icons-vue';

const icons = [
    IconBrandAdobeIllustrator,
    IconBrandAdobePhotoshop,
    IconBrandAdobeIndesign,
    IconBrandAdobePremier,
    IconBrandAdobeAfterEffect,
    IconBrandAdobeXd,
    IconBrandAdobe,
    IconBrandFigma,
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
    // design
    IconBrandBlender,
    // media
    IconBrandYoutubeFilled,
    IconBrandLinkedinFilled,
    IconBrandWhatsappFilled,
    IconBrandInstagramFilled,
    IconBrandMeta,
    IconDeviceGamepad2,
];
</script>

<template>
    <div class="c-carousel">
        <div class="carousel-track">
            <div class="icon" v-for="(Icon, index) in icons" :key="index + Math.random()">
                <component :is="Icon" :size="150" stroke-width="1.5" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.c-carousel {
    width: 100vw;
    overflow: hidden;
}

.carousel-track {
    display: flex;
    animation: scroll 12s linear infinite;

    div {
        opacity: 0.1;
        svg {
            color: gray;
        }
        & :hover {
            opacity: 1;
            color: white;
        }
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>