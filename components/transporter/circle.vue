<template>
  <section class="flexed-column">
    <div class="mb-1">
      <p class="flexed-row">
        <img
          class="store"
          src="@/assets/icons/User-Dashboard/store-outline-icon.svg"
          alt="Store Icon"
        />
        Papa Joe's Circle
      </p>
    </div>

    <div class="container">
      <h3 class="weight-5 mb-1">Papa Joe's Circle</h3>

      <p class="weight-4 mb-2">
        Work with anyone, anywhere, in real time with web versions of
        productivity apps
      </p>

      <div class="flexed-row mb-2">
        <p class="flexed-row weight-4">
          <img
            src="@/assets/icons/User-Dashboard/location-icon.svg"
            alt="Location"
          />&nbsp;Location:
        </p>
        <p class="weight-4">Lagos, Nigeria</p>
      </div>

      <div class="flexed-row mb-2">
        <p class="flexed-row weight-4">
          <img
            src="@/assets/icons/User-Dashboard/destination.svg"
            alt="Location"
          />&nbsp;Destination:
        </p>
        <p class="weight-4">Accra, Ghana</p>
      </div>

      <div class="details mb-2 flexed-row">
        <img
          src="@/assets/images/general/hero.png"
          alt="Hero"
          class="border-round"
        />

        <div class="flexed-column">
          <p class="weight-3">Circle Owner</p>
          <h4 class="weight-5">Lorem Ipsum Founder</h4>
        </div>
      </div>

      <button class="weight-6">
        <NuxtLink to="/transporter/workspace/workspace-invite"
          >Accept Invite</NuxtLink
        >
      </button>
    </div>
  </section>
</template>

<script></script>

<style scoped>
section {
  border-radius: 8px;
  border: 1.545px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.181px 12.361px 0px rgba(0, 0, 0, 0.04);
  height: auto !important;
}
section > div:nth-of-type(1) > p {
  color: #ffffff !important;
}
section h3 {
  color: #131312;
}
section p {
  color: #3f3f3e;
}
section > .container {
  padding: 16px;
}
section > .container > div {
  flex-wrap: wrap;
}

.store {
  width: 24px;
  height: 24px;
}

section > div:nth-of-type(1) {
  padding: 16px;
  height: 7em;
  background-size: cover;
  border-radius: 7.815px 7.815px 0px 0px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}
section > div:nth-of-type(1) > p {
  color: white;
  z-index: 6;
}

section > .container div {
  gap: 20px;
}
section > .container div > p:last-child {
  color: #2b6ec3;
}
.container > button {
  width: 100%;
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  background: none;
}
.details {
  height: 3em;
  flex-wrap: wrap;
}
.details > div {
  gap: 0px !important;
}
.details > img {
  height: 100%;
}
</style>
