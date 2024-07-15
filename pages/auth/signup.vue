<template>
  <section class="wrapper flexed-row">
    <div class="text-center center">
      <h1 class="weight-7 mb-3">Zukonu.</h1>
      <signupForm />
    </div>
  </section>
</template>

<script setup>
import signupForm from "@/components/auth/signup-form.vue";
</script>

<style scoped>
section.wrapper {
  height: 100vh;
  width: 100vw;
  background: url("@/assets/images/Auth/signup.png");
  background-size: cover;
  justify-content: right;
  overflow-y: auto; 
  @media (width<768px) {
    justify-content: center;
    padding: 0px !important;
  }
}
section.wrapper > div {
  width: 35%;
  height: 100vh !important;
  margin: 0 80px;
  @media (width<1000px) {
    width: 100%;
    margin: 0px;
  }
}
section.wrapper > div > h1 {
  color: #ffffff;
  @media (width<1000px) {
    display: none;
  }
}
</style>
