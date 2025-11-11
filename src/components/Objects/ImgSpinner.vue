<template>
  <div 
    class="carousel-container"
    @mouseenter="pause"
    @mouseleave="play"
  >
    <div class="items" ref="wrapper">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="item"
        ref="slides"
      >
        {{ item }}
      </div>
    </div>

    <div class="controls">
      <button @click="prev">PREV</button>
      <button @click="next">NEXT</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

export default {
  setup() {
    const items = ref([...Array(5).keys()]);
    const slides = ref([]);
    const wrapper = ref(null);
    const index = ref(0);

    let autoplayTimer = null;
    const interval = 1000; // 自動輪播間隔

    const update = () => {
      const total = items.value.length;

      slides.value.forEach((el, i) => {
        const diff = (i - index.value + total) % total; 

        gsap.to(el, {
          y: diff * 100,
          scale: 1 - Math.abs(diff) * 0.1,
          opacity: 1 - Math.abs(diff) * 0.3,
          zIndex: 10 - Math.abs(diff),
          duration: 0.5,
          ease: "power2.out"
        });
      });
    };

    const next = () => {
      index.value = (index.value + 1) % items.value.length;
      update();
    };

    const prev = () => {
      index.value = (index.value - 1 + items.value.length) % items.value.length;
      update();
    };

    const play = () => {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(next, interval);
    };

    const pause = () => clearInterval(autoplayTimer);

    onMounted(() => {
      slides.value = wrapper.value.querySelectorAll(".item");
      update();
      play(); // ✅ 啟動自動播放
    });

    onBeforeUnmount(() => pause());

    return { items, prev, next, slides, wrapper, play, pause };
  }
};
</script>

<style scoped>
.carousel-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  background-color: #2e4bcc;
}

.items {
  position: relative;
  height: 80vh;
  width: 100%;
  overflow: hidden;
}

.item {
  position: absolute;
  width: 100%;
  height: 50vh;
  border-radius: 10px;
  background: #2ecc40;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.controls {
  margin-top: 20px;
}
button {
  margin: 0 6px;
  padding: 6px 14px;
  border-radius: 6px;
}
</style>
