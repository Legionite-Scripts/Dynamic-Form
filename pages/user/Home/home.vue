<template>
  <main>
    <Navbar />
    <div class="container">
      <div class="mt-5 mb-3 flexed-column">
        <p>
          Welcome to Zukonu, <a href="#">follow the link</a> to read the user
          guide
        </p>

        <div class="flexed-row">
          <button>Create Circle</button>
          <button>Find Circle</button>
        </div>
      </div>

      <!--  -->

      <div class="bg center p-5 mb-5">
        <h2 class="weight-6 mb-2">Start Shipping Your Products</h2>

        <section class="flexed-row">
          <div class="flexed-column">
            <label for="location" class="mb-1">From Location</label>
            <select v-model="currentLocation" name="currentLocation" required>
              <option value="">Lagos, Nigeria</option>
              <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <div class="flexed-column">
            <label for="location" class="mb-1">To Destination</label>
            <select v-model="destination" name="currentLocation" required>
              <option value="">Accra, Ghana</option>
              <option
                v-for="option in destinationOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <button>Find Circle</button>
        </section>
      </div>
      <!--  -->
      <div class="circles mb-4">
        <h2 class="weight-5 mb-4">Circles Based On Your Location</h2>

        <div>
          <circleComponent v-for="n in 12" :key="n" />
        </div>
      </div>
      <!--  -->

      <div class="bottom mb-5 flexed-row">
        <div class="flexed-row center">
          <div>
            <h2 class="mb-1 weight-5">Understanding Zukonu Transport System</h2>
            <p class="mb-2 weight-3">
              Lorem ipsum dolor sit amet consectetur. Enim faucibus nunc erat
              ac. Ut duis.
            </p>
            <a href="#">Learn</a>
          </div>

          <img src="@/assets/images/User-Dashboard/filler-img.png" alt="" />
        </div>

        <div class="flexed-row center">
          <div>
            <h2 class="mb-1 weight-5">Understanding Zukonu Transport System</h2>
            <p class="mb-2 weight-3">
              Lorem ipsum dolor sit amet consectetur. Enim faucibus nunc erat
              ac. Ut duis.
            </p>
            <a href="#">Learn</a>
          </div>

          <img src="@/assets/images/User-Dashboard/filler-img.png" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import circleComponent from "@/components/User-Dashboard/circle.vue";

const currentLocation = ref("");
const destination = ref("");

//Options for the select tag
const options = [
  { value: "Lagos", label: "Lagos, Nigeria" },
  { value: "User", label: "Platform User" },
  { value: "Transporter", label: "Transporter" },
];

//Options for the select tag
const destinationOptions = [
  { value: "Lagos", label: "lkqnkd, Nigeria" },
  { value: "User", label: "Platform User" },
  { value: "Transporter", label: "Transporter" },
];
</script>

<style scoped>
* {
  overflow-x: hidden !important;
}

p a {
  text-decoration: underline;
  color: #2a6fc3;
}



.container {
  width: 90%;
  margin: 0 auto;

  @media (width< 1000px) {
    width: 95%;
  }
}

.container > div:nth-of-type(1) {
  border-radius: 8px;
  border: 1.582px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
  padding: 32px;
  gap: 24px;
}

.container > div:nth-of-type(1) > div {
  gap: 8px;
}

.container > div:nth-of-type(1) > div > button {
  border-radius: 2px;
  padding: 8px 16px;
}

.container > div:nth-of-type(1) > div > button:first-child {
  background: #2a6fc3;
  color: #ffffffff;
}

.container > div:nth-of-type(1) > div > button:last-child {
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  color: #121212;
  background: transparent;
}

/*  */
.bg {
  border-radius: 8px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("@/assets/images/User-Dashboard/home-bg.jpeg") lightgray 50% / cover
      no-repeat;
  background-size: cover;
}

.bg > h2 {
  color: #fffefe;
}

.bg > section {
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  padding: 32px;
  gap: 12px;
  flex-wrap: wrap;
}

.bg select {
  height: 3em;
  width: 20em;
  padding: 8px 16px;
  border-radius: 4px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  background-color: #fff !important;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
}

.bg label {
  color: #fffefe;
}

.bg select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>')
    no-repeat right center;
  background-size: 20px 20px;
  background-position: 98% center;
  color: #3f3f3e;
}

.bg button {
  height: 3em;
  padding: 8px 16px;
  align-self: flex-end;
  border-radius: 2px;
  background: #121212;
  color: #fff;
}
.circles > div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}
.bottom {
  gap: 32px;
  @media (width<768px) {
    flex-wrap: wrap;
  }
}
.bottom > div {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1.582px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
  padding: 24px;

  @media (width<768px) {
    flex-wrap: wrap;
    width: 100%;
  }
}
.bottom a {
  color: #2a6fc3;
}
</style>
