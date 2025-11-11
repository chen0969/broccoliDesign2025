<template>
  <section ref="container" class="scroll-section">
    <div ref="top" class="panel top-panel">
      <h1>Top Section</h1>
    </div>
    <div ref="bottom" class="panel bottom-panel">
      <h1>Bottom Section</h1>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const container = ref(null)
const top = ref(null)
const bottom = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: 'top top',
      end: '+=100%',   // scroll distance
      scrub: true,     // smooth scroll animation
      pin: true,       // pin the section
    },
  })

  tl.to(bottom.value, {
    yPercent: -100,    // move up
    ease: 'none',
  })
})
</script>

<style scoped>
.scroll-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.top-panel {
  background: #5bc0de;
  z-index: 1;
}

.bottom-panel {
  background: #d9534f;
  z-index: 2;
  transform: translateY(100%); /* start below */
}
</style>
