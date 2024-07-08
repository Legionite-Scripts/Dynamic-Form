<template>
  <main class="home">
    <Navbar />
    <div class="container pr-5 pl-5">
      <div class="truck-bg mt-5 center mb-4">
        <h2 class="weight-6">Zukonu Fleet Owner</h2>
      </div>

      <section class="overview flexed-column mb-5">
        <div class="flexed-row">
          <h2 class="weight-5">Overview</h2>

          <div class="flexed-row mb-4">
            <button class="p-1 weight-6">Create Vehicle</button
            >&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="p-1 weight-6">Circle Requests</button>
          </div>
        </div>
        <hr class="mb-4" />
        <div class="overview-records flexed-row">
          <!-- 01 -->
          <div class="flexed-column p-2">
            <p class="flexed-row weight-4 mb-3">
              <img src="@/assets/icons/bus-thin.svg" alt="bus" />&nbsp;No. Of
              Registered Vehicles
            </p>

            <h1 class="weight-5 mb-3">10</h1>
            <button class="p-1 weight-5">Vehicle Management</button>
          </div>
          <!-- 02 -->
          <div class="flexed-column p-2">
            <p class="flexed-row weight-4 mb-3">
              <img src="@/assets/icons/circle.svg" alt="circle" /> &nbsp;No. Of
              Active Circles
            </p>

            <h1 class="weight-5 mb-3">3</h1>
            <button class="p-1 weight-5">View Circle Requests</button>
          </div>
          <div class="flexed-row p-2 center">
            <img src="@/assets/images/general/hero.png" alt="Hero" />
            <div class="flexed-column">
              <h2 class="mb-2 weight-6" style="color: #2a6fc3">
                Lorem Transporter
              </h2>
              <h3 class="mb-1 weight-5" style="color: #3e3f3f">
                Contact Email
              </h3>
              <p class="mb-2" style="color: #818180">transporter@hotmail.com</p>

              <h3 class="mb-1 weight-5" style="color: #3e3f3f">
                Contact Phone Number
              </h3>
              <p class="mb-2" style="color: #818180">+23481600000000</p>
            </div>
          </div>
        </div>
      </section>

      <section class="vehicle-management mb-5 flexed-column">
        <h2 class="weight-5 mb-3" style="color: #131213">Vehicle Management</h2>
        <div>
         <track-vehicle/>
         <track-vehicle/>
         <track-vehicle/>

         <track-vehicle/>
         <track-vehicle/>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
hr {
  border: 0.5px solid #c3c3c2;
}
main {
  background: #f2f3f3;
  overflow-x: hidden !important;
}
.container {
  @media (width<1000px) {
    padding: 0 20px 0 20px !important;
  }
}
/* Overview */
section.overview > div {
  justify-content: space-between;
  flex-wrap: wrap;
  @media (width<1000px) {
    gap: 1.5em;
  }
}
section.overview > div > h2 {
  color: #131312;
}
section.overview > div > div > button {
  background: #fffefe;
  border-radius: 2px;
}
.overview-records {
  flex-wrap: wrap !important;
}
.overview-records > div {
  width: 28%;
  background: #fffefe;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
  justify-content: space-between;
  @media (width<1000px) {
    width: 100%;
  }
}
.overview-records > div > p {
  color: #818081;
}
.overview-records > div > h1 {
  color: #2a6fc3;
  font-size: 8em;
}
.overview-records > div > button {
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
}
.overview-records > div:last-child {
  width: 40%;
  @media (width<1000px) {
    width: 100%;
    flex-direction: column;
    gap: 2em;
  }
}
.overview-records > div:last-child > img {
  height: 70%;
  border-radius: 50%;
  @media (width<1000px) {
    height: 8em;
    flex-direction: column;
  }
}
.overview-records > div:last-child > div {
  width: 60%;
  @media (width<1000px) {
    width: 100%;
  }
}
/*  */
/* Vehicle Management */
section.vehicle-management > div {
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media(width<1000px){
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
