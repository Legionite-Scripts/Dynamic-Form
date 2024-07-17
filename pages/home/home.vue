<template>
  <NuxtLayout name="main">
    <main>
      <div class="mt-5 mb-3 flexed-column">
        <p>
          Welcome to Zukonu, <a href="#">follow the link</a> to read the user
          guide
        </p>

        <div class="flexed-row">
          <button>
            <NuxtLink to="/user/circle-management/create-circle"
              >Create Circle</NuxtLink
            >
          </button>
          <button>
            <NuxtLink to="/user/circle-management/circles"
              >Find Circle</NuxtLink
            >
          </button>
        </div>
      </div>

      <!--  -->

      <div class="bg center p-5 mb-5">
        <h2 class="weight-6 mb-2">Start Shipping Your Products</h2>

        <form class="section">
          <div class="container">
            <div class="form-group">
              <label for="location">From Location</label>
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

            <div class="form-group">
              <label for="location">To Destination</label>
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
          </div>
        </form>
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
    </main>
  </NuxtLayout>
</template>

<script setup>
import circleComponent from "@/components/user/circle.vue";

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

main > div:nth-of-type(1) {
  border-radius: 8px;
  border: 1.582px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
  padding: 32px;
  gap: 24px;
}

main > div:nth-of-type(1) > div {
  gap: 8px;
}

main > div:nth-of-type(1) > div > button {
  border-radius: 2px;
  padding: 8px 16px;
}

main > div:nth-of-type(1) > div > button:first-child {
  background: #2a6fc3;
  color: #ffffffff;
}

main > div:nth-of-type(1) > div > button:last-child {
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

.section {
  width: 60%;

  @media (max-width: 1000px) {
    width: 90%;
  }
}

.bg > h2 {
  color: #fffefe;
}

.bg > .section {
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  padding: 32px;
  gap: 12px;
  flex-wrap: wrap;
}

.bg select {
  background-color: #fff !important;
}

.bg label {
  color: #fffefe;
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
