<template>
  <main class="flexed-row p-5">
    <div class="text-center flexed-column">
      <h1 class="weight-7 mb-3" style="color: #ffffff">Zukonu.</h1>
      <login-form />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  background: url("@/assets/images/Auth/login.png");
  background-size: cover;
  justify-content: right;
  overflow: hidden !important;
  padding: 80px;
  @media (width<768px) {
    justify-content: center;
    padding: 0px !important;
  }
}
main > div {
  width: 35%;
  height: 100vh !important;
  justify-content: center;
  @media (width<1000px) {
    width: 100%;
  }
}
main > div > h1 {
  @media (width<1000px) {
    display: none;
  }
}
</style>
