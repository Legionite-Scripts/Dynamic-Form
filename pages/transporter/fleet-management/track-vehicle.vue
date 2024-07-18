<template>
  <NuxtLayout name="main">
    <main>
      <div class="wrapper mt-5">
        <h2 class="weight-5 mb-5">My Vehicle</h2>

        <div>
          <track-vehicle />

          <img src="@/assets/images/User-Dashboard/map.png" alt="" />
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<style scoped>
.wrapper {
  margin-top: 100px;
}
.wrapper div {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;

  @media (width<1500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));    
  }
}

img{
    @media (width<1500px) {
   width: 100%;    
  }
}
</style>
