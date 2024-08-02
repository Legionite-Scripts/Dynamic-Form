<template>
  <div class="container">
    <!-- <div class="progress">
        <div
          class="progress-bar"
          :style="{ width: `${(currentIndex + 1) * 10}%` }"
        ></div>
      </div> -->
    <transition name="slide">
      <component
        :is="components[currentIndex]"
        @next="nextComponent"
        @back="previousComponent"
      />
    </transition>
    <!-- <button @click="previousComponent" :disabled="currentIndex === 0">Back</button>
      <button @click="nextComponent">Next</button> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import ComponentOne from "../components/slideFormOne.vue";
import ComponentTwo from "../components/slideFormTwo.vue";
import ComponentThree from "../components/slideFormThree.vue";

const components = [ComponentOne, ComponentTwo, ComponentThree];
const currentIndex = ref(0);

const nextComponent = () => {
  currentIndex.value = (currentIndex.value + 1) % components.length;
};

const previousComponent = () => {
  currentIndex.value =
    (currentIndex.value - 1 + components.length) % components.length;
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background: #f9f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
main {
  border: 1px solid #333;
}
.progress {
  width: 100%;
  background: #eee;
  height: 10px;
  position: relative;
  margin-bottom: 20px;
}

.progress-bar {
  height: 100%;
  width: 50% !important;
  background: #4caf50;
  transition: width 0.5s;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  /* transform: translateX(-200%); */
  opacity: 0;
}

.slide-leave-active {
  position: absolute;
}
</style>
