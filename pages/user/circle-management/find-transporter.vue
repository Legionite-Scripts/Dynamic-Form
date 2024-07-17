<template>
  <NuxtLayout name="main">
    <main class="mt-5">
      <h2 class="weight-4 mb-5">Transporter Vehicles</h2>

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

            <button>Find Transporter</button>
          </div>
        </form>
      </div>

      <div class="content-layout">
        <div class="content mb-5">
          <!--  -->
          <div class="circle-admin flexed-column">
            <div class="flexed-row top-admin center">
              <img class="hero no-image" alt="Hero" />

              <div>
                <h3 class="weight-5 mb-2">Transporter Service 1</h3>

                <div class="transporter-detail flexed-row mb-1">
                  <p class="weight-4">Address:</p>
                  <p class="weight-4">Lagos, Nigeria</p>
                </div>

                <div class="transporter-detail flexed-row mb-1">
                  <p class="weight-4">Contact Email:</p>
                  <p class="weight-4">goodisgood@gmail.com</p>
                </div>

                <div class="transporter-detail flexed-row mb-2">
                  <p class="weight-4">Phone Number:</p>
                  <p class="weight-4">+234818717189</p>
                </div>

                <div class="transporter-location flexed-row mb-1">
                  <p class="weight-4 flexed-row">
                    <img src="@/assets/icons/location.svg" alt="" /> Location
                  </p>
                  <p class="location weight-4">Lagos, Nigeria</p>
                </div>

                <div class="transporter-location flexed-row mb-2">
                  <p class="weight-4 flexed-row">
                    <img
                      src="@/assets/icons/User-Dashboard/destination.svg"
                      alt=""
                    />
                    Destination:
                  </p>
                  <p class="weight-4 location">Accra, Ghana</p>
                </div>

                <button class="add-transporter">Use Transport Service</button>
              </div>
            </div>
          </div>
          <!--  -->
          <!--  -->
          <div class="circle-admin flexed-column">
            <div class="flexed-row top-admin center">
              <img class="hero no-image" alt="Hero" />

              <div>
                <h3 class="weight-5 mb-2">Transporter Service 1</h3>

                <div class="transporter-detail flexed-row mb-1">
                  <p class="weight-4">Address:</p>
                  <p class="weight-4">Lagos, Nigeria</p>
                </div>

                <div class="transporter-detail flexed-row mb-1">
                  <p class="weight-4">Contact Email:</p>
                  <p class="weight-4">goodisgood@gmail.com</p>
                </div>

                <div class="transporter-detail flexed-row mb-2">
                  <p class="weight-4">Phone Number:</p>
                  <p class="weight-4">+234818717189</p>
                </div>

                <div class="transporter-location flexed-row mb-1">
                  <p class="weight-4 flexed-row">
                    <img src="@/assets/icons/location.svg" alt="" /> Location
                  </p>
                  <p class="location weight-4">Lagos, Nigeria</p>
                </div>

                <div class="transporter-location flexed-row mb-2">
                  <p class="weight-4 flexed-row">
                    <img
                      src="@/assets/icons/User-Dashboard/destination.svg"
                      alt=""
                    />
                    Destination:
                  </p>
                  <p class="weight-4 location">Accra, Ghana</p>
                </div>

                <button class="add-transporter">Use Transport Service</button>
              </div>
            </div>
          </div>
        </div>

        <div class="content mb-5">
          <!--  -->
          <div class="circle-admin flexed-column">
            <div class="flexed-row top-admin center">
              <img class="hero no-image" alt="Hero" />

              <div>
                <h3 class="weight-5 mb-2">Transporter Service 1</h3>

                <div class="transporter-detail flexed-row mb-1">
                  <p class="weight-4">Address:</p>
                  <p class="weight-4">Lagos, Nigeria</p>
                </div>

                <div class="transporter-detail flexed-row mb-1">
                  <p class="weight-4">Contact Email:</p>
                  <p class="weight-4">goodisgood@gmail.com</p>
                </div>

                <div class="transporter-detail flexed-row mb-2">
                  <p class="weight-4">Phone Number:</p>
                  <p class="weight-4">+234818717189</p>
                </div>

                <div class="transporter-location flexed-row mb-1">
                  <p class="weight-4 flexed-row">
                    <img src="@/assets/icons/location.svg" alt="" /> Location
                  </p>
                  <p class="location weight-4">Lagos, Nigeria</p>
                </div>

                <div class="transporter-location flexed-row mb-2">
                  <p class="weight-4 flexed-row">
                    <img
                      src="@/assets/icons/User-Dashboard/destination.svg"
                      alt=""
                    />
                    Destination:
                  </p>
                  <p class="weight-4 location">Accra, Ghana</p>
                </div>

                <button class="add-transporter">Use Transport Service</button>
              </div>
            </div>
          </div>
          <!--  -->
          <!--  -->
          <div class="circle-admin flexed-column">
            <div class="flexed-row top-admin center">
              <img class="hero no-image" alt="Hero" />

              <div>
                <h3 class="weight-5 mb-2">Transporter Service 1</h3>

                <div class="transporter-detail flexed-row mb-1">
                  <p class="weight-4">Address:</p>
                  <p class="weight-4">Lagos, Nigeria</p>
                </div>

                <div class="transporter-detail flexed-row mb-1">
                  <p class="weight-4">Contact Email:</p>
                  <p class="weight-4">goodisgood@gmail.com</p>
                </div>

                <div class="transporter-detail flexed-row mb-2">
                  <p class="weight-4">Phone Number:</p>
                  <p class="weight-4">+234818717189</p>
                </div>

                <div class="transporter-location flexed-row mb-1">
                  <p class="weight-4 flexed-row">
                    <img src="@/assets/icons/location.svg" alt="" /> Location
                  </p>
                  <p class="location weight-4">Lagos, Nigeria</p>
                </div>

                <div class="transporter-location flexed-row mb-2">
                  <p class="weight-4 flexed-row">
                    <img
                      src="@/assets/icons/User-Dashboard/destination.svg"
                      alt=""
                    />
                    Destination:
                  </p>
                  <p class="weight-4 location">Accra, Ghana</p>
                </div>

                <button class="add-transporter">Use Transport Service</button>
              </div>
            </div>
          </div>
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
/*  */
.bg {
  border-radius: 8px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("@/assets/images/User-Dashboard/circle-management-bg.jpeg") lightgray
      50% / cover no-repeat;
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

.content-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.content {
  display: grid;
  gap: 24px;
  height: fit-content !important;
}

.content > .circle-admin {
  height: fit-content !important;
  border-radius: 8px;
  gap: 24px;
}

.content > .circle-admin {
  height: fit-content !important;
  border-radius: 8px;
  gap: 24px;
}

.circle-admin img.hero {
  height: 150px;
  width: 150px;
  background-color: azure;
}

.circle-admin > .top-admin {
  border-radius: 8px;
  border: 1.582px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
  padding: 32px;
}

.circle-admin > .top-admin {
  gap: 32px;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }
}
.circle-admin .transporter-detail,
.circle-admin .transporter-location {
  gap: 32px;
  justify-content: space-between;
}
.transporter-detail > p:first-child,
.transporter-location > p:first-child {
  color: rgba(0, 0, 0, 0.5);
}
.transporter-location > p:last-child {
  color: #2a6fc3;
}

.circle-admin button {
  padding: 8px 16px;
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  background: none;
}
/*  */

.chat-row {
  display: grid;
  grid-template-columns: 1fr 90%;
  gap: 14px;
}
.chat-row > img {
  height: 4em;
}
.chat-row p {
  width: 90% !important;
}
form.send-chat {
  padding: 0px;
}
form.send-chat .container {
  display: grid;
  grid-template-columns: 90% 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 80% 1fr;
  }
}

form.send-chat button {
  background: #2a6fc3;
  width: 54px;
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
