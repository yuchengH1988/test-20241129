<template>
  <div id="Story" class="relative justify-center overflow-hidden md:h-[417px] h-[680px] border-t bg-secondary-1 border-primary-2 text-primary-2 flex md:justify-start md:items-center">
    <div ref="marquee" class="absolute flex md:flex-row flex-col whitespace-nowrap">
      <ContentComponent/>
      <ContentComponent/>
    </div>
    <div
      ref="d3" class="d3-container">
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import ContentComponent from "./ContentComponent.vue";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"; 

export default {
  name: "StoryComponent",
  components: {
    ContentComponent,
  },
  setup() {
    const marquee = ref(null);
    const renderer = ref(null);
    const camera = ref(null)
    const d3 = ref(null);

    const initScene = () => {
      const scene = new THREE.Scene();
      scene.background = null;
      camera.value = new THREE.PerspectiveCamera(
        100,
        d3.value.clientWidth / d3.value.clientHeight,
        0.1,
        1000
      )
      camera.value.position.set(0, 0.5, 1);
      renderer.value = new THREE.WebGLRenderer({ alpha: true }); // alpha: true -> 透明背景
      renderer.value.setSize(d3.value.clientWidth, d3.value.clientHeight);
      renderer.value.setPixelRatio(window.devicePixelRatio);
      d3.value.appendChild(renderer.value.domElement);
      const loader = new OBJLoader();
      let model = null; 
      loader.load(
        "/assets/apple/apple.obj",
        (object) => {
          object.scale.set(5, 5, 5);
          scene.add(object);
          model = object;
        },
        undefined,
        (error) => {
          console.error("Error loading model:", error);
        }
      );
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 5, 5);
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const onMouseMove = (event) => {
        if (!model) return;
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
        vector.unproject(camera.value);
        const direction = vector.sub(camera.value.position).normalize(); 
        const target = new THREE.Vector3();
        target.copy(camera.value.position).add(direction.multiplyScalar(10));
        model.lookAt(target);
      };
  
      window.addEventListener("mousemove", onMouseMove);

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.value.render(scene, camera.value);
      };
      animate();
    }


    const isVertical = ref(window.innerWidth < 768);
    const onResize = () => {
      isVertical.value = window.innerWidth < 768;
      setupMarquee(); 
    };
    const setupMarquee = () => {
      gsap.killTweensOf(marquee.value);
      if (isVertical.value) {
        gsap.to(marquee.value, {
          y: -1335.4 ,
          duration: 10,
          repeat: -1,
          ease: "linear",
          modifiers: {
            y: gsap.utils.unitize((y) => parseFloat(y) % (1335.4/2)),
          },
        });
      } else {
        gsap.to(marquee.value, {
          x: -2848,
          duration: 10,
          repeat: -1,
          ease: "linear",
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % 2848/2),
          },
        });
      }
    };

    onMounted(() => {
      initScene();
      window.addEventListener("resize", onResize);
      setupMarquee();
    });

    return { marquee, d3 };
  },
};
</script>
<style>
.d3-container {
  width: 100%;
  height: 100%;
}

</style>
