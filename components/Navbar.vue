<template>
  <nav class="p-2 pr-5 pl-5 flexed-row center">
    <h2 class="weight-5">Zukonu Transporter</h2>
    <img src="@/assets/images/general/hero.png" alt="Hero" />
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  width: 100vw;
  background: #121212;
  color: #ffffff;
  justify-content: space-between;
  flex-wrap: wrap;
@media(width<1000px){
  padding:20px;
}
}
nav > img{
  border-radius: 50%;
  height: 3em;
}
</style>
