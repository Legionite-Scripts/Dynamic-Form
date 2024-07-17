<template>
  <NuxtLayout name="main">
    <main class="container">
      <!--  -->

      <div class="bg center p-5 mb-5 mt-5">
        <h2 class="weight-6 mb-2">Start Shipping Your Products</h2>
      </div>
      <!--  -->
      <div class="buttons flexed-row right mb-4">
        <button>All Circles</button>
        <button>Created By Me</button>
        <button>Others</button>
        <button class="flexed-row">
          <NuxtLink class="flexed-row" to="create-circle">
            Create Circle
            <img src="@/assets/icons/User-Dashboard/plus.svg" alt="Plus"
          /></NuxtLink>
        </button>
      </div>

      <!--  -->
      <div class="circles mb-4">
        <h2 class="weight-5 mb-4">Circles Based On Your Location</h2>

        <div>
          <circleComponent v-for="n in 12" :key="n" />
        </div>
      </div>
      <!--  -->
    </main>
  </NuxtLayout>
</template>

<script setup>
import circleComponent from "@/components/user/circle.vue";
</script>

<style scoped>
* {
  overflow-x: hidden !important;
}

p a {
  text-decoration: underline;
  color: #2a6fc3;
}

section.wrapper {
  width: 100%;
  overflow-y: auto;
  margin: 0 auto;
}

/*  */
.bg {
  border-radius: 8px;
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%),
    url("@/assets/images/User-Dashboard/circle-management-bg.jpeg") lightgray 50% / cover no-repeat;
  background-size: cover;
  height: 15em;
}

.bg>h2 {
  color: #fffefe;
}

.buttons {
  gap: 8px;
  flex-wrap: wrap;

  @media (width<768px) {
    justify-content: flex-start;
    gap: 20px;
  }
}

.buttons>button {
  padding: 8px 16px;
  border-radius: 2px;
  background: #fff;
}

.buttons button:last-child {
  background: #121212;
  color: #fff;
}

.circles>div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
