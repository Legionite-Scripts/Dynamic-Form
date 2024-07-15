<template>
  <section class="wrapper flexed-row">
    <div class="text-center flexed-column">
      <h1 class="weight-7 mb-3" style="color: #ffffff">Zukonu.</h1>
      <loginForm />
    </div>
  </section>
</template>

<script setup>
import loginForm from "@/components/Auth/login-form.vue";
</script>

<style scoped>
section.wrapper {
  height: 100vh;
  width: 100vw;
  background: url("@/assets/images/Auth/login.png");
  background-size: cover;
  justify-content: right;
  overflow: hidden !important;
}
section.wrapper > div {
  width: 35%;
  height: 100vh !important;
  justify-content: center;
  margin: 0 80px;
  @media (width<1000px) {
    width: 100%;
    margin: 0px;
  }
}
section.wrapper > div > h1 {
  @media (width<1000px) {
    display: none;
  }
}
</style>
