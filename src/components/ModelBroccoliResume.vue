<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const container = ref(null);
let renderer, scene, camera, model, animationId;

const props = defineProps({
  model: String,
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 300,
  }
})

const orgBroccoli = "./models/broccoli-org.gltf";

onMounted(() => {
    // Scene
    scene = new THREE.Scene();
    scene.background = null; // transparent

    // Camera (square aspect)
    camera = new THREE.PerspectiveCamera(45, 1, 0.001, 100);
    camera.position.z = 2; // back up a bit since GLTF may be bigger

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(props.width, props.height);
    container.value.appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffda24, 3);
    light.position.set(2, 2, 2);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 1));

    // Load GLTF
    const loader = new GLTFLoader();
    loader.load(
        props.model,
        (gltf) => {
            model = gltf.scene;

            // scale + center
            model.scale.set(9, 9, 9);
            model.position.set(0, 0, 0);
            model.rotation.x = Math.PI / 2;
            model.rotation.z = Math.PI;
            model.rotation.y = Math.PI;

            scene.add(model);
        },
        undefined,
        (error) => {
            console.error("Error loading GLTF:", error);
        }
    );


    // Animate
    const animate = () => {
        animationId = requestAnimationFrame(animate);
        if (model) {
            model.rotation.z += 0;
        }
        renderer.render(scene, camera);
    };
    animate();
});

onBeforeUnmount(() => {
    cancelAnimationFrame(animationId);
    renderer.dispose();
});
</script>

<template>
    <div ref="container" class="three-container"></div>
</template>

<style scoped lang="scss">
.three-container {
    overflow: hidden;
    // border: 1px solid red;
}
</style>
