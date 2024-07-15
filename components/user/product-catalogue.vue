<template>
  <main class="flexed-column">
    <div class="mb-1">
      <p class="flexed-row">
        <img
          src="@/assets/icons/User-Dashboard/store-outline-icon.svg"
          alt="Store Icon"
        />
        Papa Joe's Store
      </p>
    </div>

    <div class="container">
      <div class="flexed-row mb-1">
        <h3 class="weight-5">Bags of Fruits</h3>
        <h3 class="weight-5 flexed-row">
          <img
            src="@/assets/icons/User-Dashboard/tag.svg"
            alt="Price Tag"
          />&nbsp;<b>$50</b>
        </h3>
      </div>

      <div class="mb-2">
        <p class="weight-4">
          Work with anyone, anywhere, in real time with web versions of
          productivity apps
        </p>
      </div>

      <div class="flexed-row mb-2">
        <p class="flexed-row">
          <img
            src="@/assets/icons/User-Dashboard/location-icon.svg"
            alt="Location"
          />&nbsp;Address:
        </p>
        <p>Lagos, Nigeria</p>
      </div>

      <button>Make Enquiry</button>
    </div>
  </main>
</template>

<script></script>

<style scoped>
main {
  border-radius: 8px;
  border: 1.545px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.181px 12.361px 0px rgba(0, 0, 0, 0.04);
  padding-bottom: 16px;
  height: auto !important;
}
main h3 {
  color: #131312;
}
main p {
  color: #3f3f3e;
}
main > .container {
  padding: 0 16px 0 16px;
}
main > .container > div {
  flex-wrap: wrap;
}
main > div:nth-of-type(1) {
  padding: 16px;
  height: 10em;
  background-size: cover;
  border-radius: 7.815px 7.815px 0px 0px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("@/assets/images/User-Dashboard/component-bg.jpeg");
}
main > div:nth-of-type(1) > p {
  color: white;
  z-index: 6;
}
main > .container div:nth-of-type(1) {
  justify-content: space-between;
}
main > .container div:nth-of-type(3) {
  gap: 20px;
}
main > .container div:nth-of-type(3) > p:last-child {
  color: #2b6ec3;
}
.container > button {
  width: 100%;
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  background: none;
}
</style>
