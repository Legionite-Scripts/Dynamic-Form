<template>
  <main class="center p-4">
    <div class="container">
      <h1 class="weight-7 mb-3 text-center">Zukonu.</h1>
      <resetPasswordForm />
    </div>
  </main>
</template>

<script setup>
import resetPasswordForm from "@/components/Auth/reset-password-form.vue";
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  background: #f9f9f8;
  background-size: cover;
  @media (width<1000px) {
    padding: 10px !important;
  }
}
main > div.container {
  width: 35%;
  @media (width<1000px) {
    width: 100%;
  }
}
main > div.container > form {
  background: #ffffff;
}
form > div {
  width: 100%;
}
label {
  color: #4b4a4a;
}
input {
  height: 3em;
  background: #fff;
  border: 0.5px solid rgba(107, 114, 128, 0.2);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.03);
  border-radius: 2px;
}
button {
  width: 100%;
  border-radius: 2px;
  background: #121212;
  color: #ffffff;
}
</style>
