<template>
  <form class="p-3 flexed-column center">
    <h2 class="mb-3">Sign In</h2>
    <div class="flexed-column mb-1 fields">
      <label for="email" class="left flexed-row mb-1"
        >Email&nbsp;<span>(Required)</span></label
      >
      <input
        type="email"
        name="email"
        class="mb-2"
        placeholder="Johndoe@gmail.com"
        required
      />

      <label for="password" class="left flexed-row mb-1"
        >Password&nbsp;<span>(Required)</span></label
      >
      <input
        type="password"
        class="mb-1"
        placeholder="********"
        name="password"
        required
      />
      <a href="#" class="right mb-2">Forgot Password?</a>
    </div>

    <button class="p-2 mb-2">Sign In</button>
    <p class="mb-2">-OR-</p>
    <p>Don't have an account? <a href="#" class="weight-7">Sign Up</a></p>
  </form>
</template>

<script setup></script>
<style scoped>
* {
  color: #1e1e1e;
}
form {
  width: 100%;
  background-color: #ffffff;
  @media (width<1000px) {
    width: 100vw;
    height: 100vh !important;
    overflow-y: auto;
  }
}
form > div {
  width: 100%;
}
label {
  color: #4b4a4a;
}
label > span {
  color: #fe4a23;
}
form > div > a {
  color: #fe4a23;
}
input {
  height: 3em !important;
  border: 1.5px solid #e1e2e7;
  background: transparent;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.03);
  border-radius: 2px;
}
input::placeholder,
select {
  color: #8e8f8e;
}
button {
  width: 100%;
  border-radius: 2px;
  background: #121212;
  color: #ffffffff;
}
</style>
