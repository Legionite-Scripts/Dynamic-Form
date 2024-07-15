<template>
  <section class="wrapper center p-4">
    <div class="container">
      <h1 class="weight-7 mb-3 text-center">Zukonu.</h1>
      <div class="flexed-column center p-3">
        <h3 class="mb-1">Check your Email</h3>
        <p class="text-center mb-2">
          A link has been sent to your email, click on it to reset your password
          Sign in
        </p>
        <NuxtLink to="/auth/login" style="width: 100%">
          <button class="p-1">Sign In</button>
        </NuxtLink>
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
  background-size: cover;
  @media (width<1000px) {
    padding: 10px;
  }
}
main > div.container {
  width: 30%;
  @media (width<1000px) {
    width: auto;
  }
}
main > div.container > div {
  background: #ffffff;
}
button {
  width: 100%;
  border-radius: 2px;
  background: #121212;
  color: #ffffff;
}
</style>
