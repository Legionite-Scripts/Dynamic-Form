<template>
  <NuxtLayout name="main">
    <main>
      <div class="bg mt-5 mb-4"></div>

      <div class="header flexed-row mb-1">
        <h2 class="weight-4">Shipping Management</h2>

        <div class="flexed-row">
          <button class="add-transporter">
            <NuxtLink to="/user/shipping-management/create-product">Create Package</NuxtLink>
          </button>
          <button class="add-transporter">
            <NuxtLink to="/user/shipping-management/create-product">Create Product</NuxtLink>
          </button>
        </div>
      </div>
      <p class="weight-4 mb-5">
        Lorem ipsum dolor sit amet consectetur. Enim faucibus nunc erat ac. Ut
        duis.
      </p>

      <!-- Packages -->
      <div class="packages mb-5">
        <h2 class="weight-4 mb-3">My Packages</h2>

        <div>
          <shippingPackage v-for="n in 4" :key="n" />
        </div>
      </div>

      <!-- Products -->
      <div class="products mb-5">
        <h2 class="weight-4 mb-3">My Products</h2>

        <div>
          <productCatalogue v-for="n in 6" :key="n" />
        </div>
      </div>

      <!-- Delivery -->
      <div class="delivery">
        <h2 class="weight-4 mb-3">My Delivery</h2>

        <div>
          <shippingDelivery v-for="n in 6" :key="n" />
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
import shippingPackage from "@/components/user/shipping-package.vue";
import productCatalogue from "@/components/user/product-catalogue.vue";
import shippingDelivery from "@/components/user/shipping-delivery.vue";
</script>

<style scoped>
.bg {
  background: url("@/assets/images/User-Dashboard/circle-guideline.jpeg");
  height: 20em;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}
.header {
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
.header > div {
  gap: 8px;
}
.header button {
  padding: 8px 16px;
  border-radius: 2px;
  background: #fff;
}
.packages div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  @media (width<1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.products div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;

  @media (width<1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.delivery div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;

  @media (width<1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>
