<template>
  <NuxtLayout name="main">
    <main>
      <!-- Delivery -->
      <div class="delivery mt-5 mb-5">
        <h2 class="weight-4 mb-3">My Delivery</h2>

        <div>
          <trackDelivery v-for="n in 2" :key="n" />
        </div>
      </div>

      <!--  -->

      <div class="map"></div>
    </main>
  </NuxtLayout>
</template>

<script setup>
import trackDelivery from "@/components/user/track-delivery.vue";
</script>

<style scoped>
.delivery div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;

  @media (width<1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.map {
  height: 30em;
  width: 100%;
  background: url("@/assets/images/User-Dashboard/map.png");
}
</style>
