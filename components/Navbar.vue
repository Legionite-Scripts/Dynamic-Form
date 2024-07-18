<template>
  <nav>
    <main class="pt-2 pb-2 flexed-row center">
      <div class="flexed-row center">
        <button @click="openSidebar" class="navbar__button center">
          <img src="@/assets/icons/nav-icon.svg" alt="" />
        </button>

        <nuxt-link to="/">
          <h2 class="weight-5">Zukonu</h2>
        </nuxt-link>
      </div>
      <nuxt-link to="/user/profile">
        <img
          src="@/assets/images/general/hero.png"
          alt="Hero"
          class="border-round"
        />
      </nuxt-link>
    </main>
  </nav>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["open"]);

const openSidebar = () => {
  emit("open");
};
</script>

<style scoped>
nav {
  margin: 0 auto;
  background: #121212;
  position: sticky;
  width: 100% !important;
  top: 0;
}

main {
  width: 90%;
  margin: 0 auto;
  color: #ffffff;
  justify-content: space-between !important;
  flex-wrap: wrap;

  @media (width<1000px) {
    width: 95%;
  }
}

nav > main img {
  height: 3em;
}
main div {
  gap: 10px;
}
button {
  background: none;
}
</style>
