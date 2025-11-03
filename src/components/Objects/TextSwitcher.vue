<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// ---- prop accepts a custom array of texts ----
const props = defineProps({
  texts: {
    type: Array,
    default: () => ['The Designer', 'The Developer', 'The Photographer']
  }
})
const colors = ['lightRed', 'lightBlue', 'lightGreen']
const currentText  = ref(props.texts[0])
const currentColor = ref(colors[0])

let timer = null

onMounted(() => {
  let index = 0
  timer = setInterval(() => {
    index = (index + 1) % props.texts.length
    currentText.value  = props.texts[index]
    currentColor.value = colors[index % colors.length]
  }, 2000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
    <h2 :class="currentColor" class="zcool-qingke-huangyou-regular animate__animated animate__fadeIn">{{ currentText }}</h2>
</template>

<style lang="scss" scoped>
@use "bootstrap/dist/css/bootstrap.min.css" as *;
@use '../../assets/scss/main.scss' as *;
@use '../../assets/scss/_variables' as *;

.lightRed {
  color: $light-red;
}   
.lightBlue {
  color: $light-blue;
}
.lightGreen {
  color: $light-green;
}

</style>