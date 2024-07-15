<template>
  <nav>
    <main class="pt-2 pb-2 flexed-row center">
      <h2 class="weight-5">Zukonu</h2>
      <img
        src="@/assets/images/general/hero.png"
        alt="Hero"
        class="border-round"
      />
    </main>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  margin: 0 auto;
  background: #121212;
}
main {
  width: 90%;
  margin: 0 auto;
  color: #ffffff;
  justify-content: space-between !important;
  flex-wrap: wrap;
  @media (width<1000px) {
    width: 95%;
  }
}
nav > main > img {
  height: 3em;
}
</style>
