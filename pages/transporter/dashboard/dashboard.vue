<template>
  <NuxtLayout name="main">
    <main>
      <div class="bg mt-5 mb-4 center">
        <h2 class="weight-5">Zukonu Fleet Owner</h2>
      </div>

      <div class="btns mb-2">
        <h2 class="weight-5">Overview</h2>

        <div>
          <button>Create Vehicle</button>

          <button>Circle Requests</button>
        </div>
      </div>
      <hr class="mb-2" />

      <div class="overview mb-4">
        <div>
          <p class="flexed-row weight-4 mb-2">
            <img src="@/assets/icons/bus-thin.svg" alt="Bus" />&nbsp; No. Of
            Registered Vehicles
          </p>
          <h1 class="weight-4 mb-2">10</h1>
          <button>Vehicle Management</button>
        </div>

        <!--  -->
        <div>
          <p class="flexed-row weight-4 mb-2">
            <img src="@/assets/icons/circle.svg" alt="Bus" />&nbsp; No. Of
            Active Circles
          </p>
          <h1 class="weight-4 mb-2">3</h1>
          <button>View Circle Requests</button>
        </div>
        <!--  -->

        <div>
          <img
            src="@/assets/images/general/hero.png"
            alt="Hero"
            class="border-round"
          />

          <div>
            <h2 class="weight-5 mb-2">Lorem Transporter</h2>

            <h3 class="weight-5">Contact Email</h3>
            <p class="weight-4 mb-1">transporter@hotmail.com</p>

            <h3 class="weight-5">Contact Phone Number</h3>
            <p class="weight-4">+2348160000000</p>
          </div>
        </div>
      </div>
      <!--  -->

      <div class="vehicle-management mb-4">
        <h2 class="weight-5 mb-4">Vehicle Management</h2>

        <div>
          <track-vehicle v-for="n in 7" :key="n" />
        </div>
      </div>

      <div class="circle">
        <h2 class="weight-5 mb-4">Circle-management</h2>

        <div>
          <circleComponent v-for="n in 7" :key="n" />
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<script>
import circleComponent from "@/components/transporter/circle.vue";

export default {
  components: {
    circleComponent,
  },
};
</script>

<style scoped>
.bg {
  border-radius: 8px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url("@/assets/images/general/truck-img.png") lightgray 50% / cover no-repeat;
  height: 20em;
  border: 1px solid #333;
}
.bg h2 {
  color: #fff;
}
.btns {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;

  @media (width<768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
.btns div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.btns button {
  border-radius: 2px;
  background: #fff;
  padding: 8px 16px;
}
.overview {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 32px;

  @media (width<1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
.overview div {
  border-radius: 4px;
  background: #fff;
  padding: 16px;
  height: fit-content;
}
.overview > div:last-child {
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 24px;
  gap: 32px;

  @media (width<1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
.overview > div:last-child > div {
  width: 100% !important;
}
.overview div h1 {
  font-size: 80px !important;
  color: #2a6fc3;
}
.overview div h2 {
  color: #2a6fc3;
}
.overview div button {
  width: 100%;
  padding: 8px 16px;
  background: none;
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
}
.vehicle-management div,
.circle div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;

  @media (width<1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>
