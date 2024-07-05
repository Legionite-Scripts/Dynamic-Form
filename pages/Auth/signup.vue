<template>
  <main class="flexed-row p-5">
    <div class="text-center center">
      <h1 class="weight-7 mb-3">Zukonu.</h1>
      <signup-form />
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
  background: url("@/assets/images/Auth/signup.png");
  background-size: cover;
  justify-content: right;
  overflow-y: auto;
  @media (width<768px) {
    justify-content: center;
    padding:0px !important;
  }
}
main > div {
  width: 35%;
  height: 100vh !important;
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
