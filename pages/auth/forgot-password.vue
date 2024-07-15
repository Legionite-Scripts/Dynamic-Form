<template>
  <section class="wrapper center p-4">
    <div class="container">
      <h1 class="weight-7 mb-3 text-center">Zukonu.</h1>
      <form class="flexed-column center p-3">
        <h3 class="mb-3">Forgot Password?</h3>

        <div class="mb-3 flexed-column">
          <label for="email" class="mb-1">Email Address</label>
          <input type="email" placeholder="JohnDoe@gmail.com" required />
        </div>

        <NuxtLink to="/auth/login" style="width: 100%;">
          <button class="p-1">Sign In</button>
        </NuxtLink>
      </form>
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
section.wrapper > div.container {
  width: 30%;
  @media (width<1000px) {
    width: auto;
  }
}
section.wrapper > div.container > form {
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
