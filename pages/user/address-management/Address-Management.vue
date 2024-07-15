<template>
  <section class="wrapper">
    <Navbar />
    <main class="mt-5">
      <div class="flexed-row center mb-4">
        <h2 class="weight-5">Address Management</h2>

        <div class="flexed-row center">
          <img src="@/assets/icons/User-Dashboard/key-icon.png" alt="Key" />

          <div>
            <h4 class="weight-6">Change Password</h4>
            <p>Security</p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="profile-main center flexed-row mb-5">
        <img src="@/assets/images/general/hero.png" alt="Hero" />
        <div class="flexed-column">
          <h3 class="weight-5">Lorem Ipsum Founder</h3>
          <span class="weight-1">loremupsum@hotmail.com</span>
          <p>
            Personalize your account with a photo. Your profile photo<br />
            will appear on apps and devices that use your<br />
            Microsoft account.
          </p>
        </div>
      </div>
      <!--  -->

      <form>
        <h3 class="weight-5 mb-1">Address Info</h3>
        <hr class="mb-3" />

        <section class="form-inner">
          <div class="flexed-column">
            <label for="contactAddress" class="mb-1">Contact Address</label>
            <input
              type="text"
              placeholder="Papa Joe's Circle"
              name="contactAddress"
            />
          </div>

          <div class="flexed-column">
            <label for="phoneNumber" class="mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="+2349281818181"
              name="phoneNumber"
            />
          </div>

          <div class="flexed-column">
            <label for="location" class="mb-1">Current Location</label>
            <select
              v-model="currentLocation"
              class="mb-2"
              name="currentLocation"
              required
            >
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
            <label for="contactEmail" class="mb-1">Contact Email</label>
            <input
              type="text"
              placeholder="me@zukonu.com"
              name="contactEmail"
            />
          </div>
        </section>
      </form>
    </main>
  </section>
</template>

<script setup>
const currentLocation = ref("");

//Options for the select tag
const options = [
  { value: "Lagos", label: "Lagos, Nigeria" },
  { value: "User", label: "Platform User" },
  { value: "Transporter", label: "Transporter" },
];
</script>

<style scoped>
* {
  overflow-x: hidden;
}

section.wrapper {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}

main > div:first-child {
  justify-content: space-between;
  flex-wrap: wrap;

  @media (width<1000px) {
    gap: 10px;
  }
}

main > div > div {
  gap: 20px;
}

main > .profile-main {
  padding: 32px;
  gap: 32px;
  border-radius: 8px;
  border: 1.582px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);

  @media (width<768px) {
    flex-direction: column;
    gap: 40px;
  }
}

.profile-main > img {
  border-radius: 4px;
}

.profile-main span,
.profile-main p {
  color: #3e3f3f;
}

.profile-main > div > div {
  gap: 10px;
}

form {
  border-radius: 8px;
  background: #fafafa;
  padding: 32px;
}
form > .form-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
form input::placeholder {
  color: #3f3f3e;
}
form input,
form select {
  height: 3em;
  border-radius: 4px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
}
form select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>')
    no-repeat right center;
  background-size: 20px 20px;
  background-position: 98% center;
  color: #3f3f3e;
}
</style>
