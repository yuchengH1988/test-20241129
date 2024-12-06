<template>
    <div class="p5-container" ref="p5Container">
    </div>
  </template>
  
  <script>
  import { onMounted, ref, onUnmounted } from 'vue';
  import p5 from 'p5';
  export default {
    name: 'P5jsComponent',
    setup () {
      const p5Instance = ref(null);
      const p5Container = ref(null); 

      const sketch = (p) => {
        const color = p.color('#E0111133')
        const endColor = p.color('#000')
        const width = p5Container.value.offsetWidth
        const height = p5Container.value.offsetHeight

        p.setup = () => {
          p.createCanvas(
            width,
            height,
          ).parent(p5Container.value)
          p.rectMode('center')
          p.noStroke();
          p.frameRate(30)
        }
        p.windowResized = () => {
          p.resizeCanvas(
            width,
            height
          )
        };
        p.draw = () => {
          p.background('#000000')
          for(let i = 0; i < p.width; i = i + 100) {
            const bounceIndex = (i+p.frameCount * 10)/100
            const setColor = p.lerpColor(
              color,
              endColor,
              (p.sin(bounceIndex) + 1) /2
            )
            p.fill(setColor)
            p.rect(
              i + 50 * p.sin(bounceIndex),
              height/2,
              50, 150 + (p.sin(bounceIndex + 1) * p.noise(bounceIndex * 5)) * 100)
          }
        };
      }
      onMounted(async() => {
        setTimeout(() => {
          p5Instance.value = new p5(sketch)
        }, 1000)
      });
      onUnmounted(() => {
        p5Instance.value.remove(); // 清理 p5.js 畫布
      });
      return {
        p5Container,
      };
    }
  };
  </script>
  
  <style scoped>
  .p5-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    transform: translate(-50%, -40%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    height: 100%;
  }
  @screen md {
    .p5-container {
      z-index: -10;
      height: 70%;
      transform: translate(-50%, -55%);
    }
  }
  </style>
  