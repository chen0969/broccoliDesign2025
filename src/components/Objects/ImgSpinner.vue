<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 一定要註冊 ScrollTrigger，不然會報錯
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // 1️⃣ 先讓所有卡片有初始樣式
  gsap.set('.card', {
    opacity: 0,
    y: 100, // 往下位移一點
    scale: 0.9
  })

  // 2️⃣ 進場動畫
  gsap.to('.card', {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    stagger: 0.2, // 讓每張卡片依序出現
    ease: 'power2.out'
  })

  // 3️⃣ 加入滾動動畫 ScrollTrigger
  gsap.to('.card', {
    scrollTrigger: {
      trigger: '.carousel', // 監聽這個區塊
      start: 'top top',     // 區塊頂端到視窗頂端時開始
      end: 'bottom bottom', // 區塊底部到視窗底部時結束
      scrub: true,          // 跟著滾動進度播放
      pin: true             // 卡片區會被固定在畫面
    },
    yPercent: 100,          // 滾動時向下移動
    ease: 'none'
  })
})

onBeforeUnmount(() => {
  // 清除所有 scrollTrigger，避免切換頁面時殘留
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<template>
  <div class="carousel">
    <div class="card" v-for="n in 7" :key="n">Card {{ n }}</div>
  </div>
</template>

<style>
.carousel {
  width: 100%;
  height: 100vh;
  background: #eee;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  position: absolute;
  width: 200px;
  height: 300px;
  background: #88c;
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
</style>
