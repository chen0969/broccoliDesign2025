<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Props: allow custom image source and rotation
const props = defineProps({
    imgSrc: {
        type: String,
        required: true
    },
    rotateDeg: {
        type: Number,
        default: 180
    }
})

const targetDiv = ref(null)
const imgRef = ref(null)
let hoverTween = null

onMounted(() => {
    gsap.fromTo(
        imgRef.value,
        {
            opacity: 0,        // start fully transparent
            rotation: 0,       // start angle
            scale: 0.8         // start slightly smaller
        },
        {
            opacity: 1,        // fade in
            rotation: props.rotateDeg,
            scale: 1,          // scale to normal size
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: targetDiv.value,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                markers: false
            }
        }
    )

    // Hover effect
    imgRef.value.addEventListener('mouseenter', () => {
        hoverTween = gsap.to(imgRef.value, {
            rotation: props.rotateDeg - 10, // rotate +10°
            duration: 0.3,
            scale: 1.3,
            ease: 'power1.out'
        })
    })

    imgRef.value.addEventListener('mouseleave', () => {
        // Return to scroll-based rotation
        if (hoverTween) hoverTween.kill()
        gsap.to(imgRef.value, {
            rotation: props.rotateDeg + 10,
            duration: 0.3,
            scale: 1,
            ease: 'power1.inOut'
        })
    })
})


onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<template>
    <div ref="targetDiv">
        <img ref="imgRef" :src="imgSrc" alt="scroll image" />
    </div>
</template>

<style lang="scss" scoped>
@use "bootstrap/dist/css/bootstrap.min.css" as *;
@use '../../assets/scss/main.scss' as *;
</style>
