<script setup>
import HeaderComponent from '@/components/HeaderAndFooter/Header.vue';
import FooterComponent from '@/components/HeaderAndFooter/Footer.vue';
</script>

<template>
  <HeaderComponent/>
  <main>
    <router-view />
  </main>
  <FooterComponent />
</template>

<style scoped lang="scss">
nav {
  padding-top: 1rem;
}
</style>
