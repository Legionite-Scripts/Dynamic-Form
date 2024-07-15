<template>
  <section class="wrapper center p-4">
    <div class="container">
      <h1 class="weight-7 mb-3 text-center">Zukonu.</h1>
      <div class="flexed-column center p-3">
        <h3 class="mb-1">Check your Email</h3>
        <p class="text-center mb-2">
          Account creation successful, check your email for account activation
        </p>
        <button class="p-1">Sign In</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
section.wrapper {
  height: 100vh;
  width: 100vw;
  background: url("@/assets/images/Auth/signup-success.png");
  background-size: cover;
  @media (width<1000px) {
    background: #f9f9f8;
    padding: 10px;
  }
}
section.wrapper > div.container {
  width: 20%;
  @media (width<1000px) {
    width: auto;
  }
}
section.wrapper > div.container > div {
  background: #ffffff;
}
button {
  width: 100%;
  border-radius: 2px;
  background: #121212;
  color: #ffffff;
}
</style>
