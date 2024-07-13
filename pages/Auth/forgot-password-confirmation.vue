<template>
  <main class="center p-4">
    <div class="container">
      <h1 class="weight-7 mb-3 text-center">Zukonu.</h1>
      <div class="flexed-column center p-3">
        <h3 class="mb-1">Check your Email</h3>
        <p class="text-center mb-2">
          A link has been sent to your email, click on it to reset your password
          Sign in
        </p>
        <button class="p-1">Sign In</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  background: #f9f9f8;
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
