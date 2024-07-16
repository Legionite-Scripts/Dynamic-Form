<template>
    <section>
      <h3 class="weight-5 mb-3">Papa Joe’s Circle - Delivery</h3>
  
      <div class="flexed-row mb-2">
        <p class="weight-4">
          <img src="@/assets/icons/location.svg" alt="location" /> Route:
        </p>
        <p class="weight-4">Lagos Nigeria - Accra Ghana</p>
      </div>
  
      <button class="weight-5">Track Delivery</button>
    </section>
  </template>
  
  <script></script>
  
  <style scoped>
  section {
    background: #fff;
    padding: 16px;
    height: fit-content !important;
  }
  section div {
    gap: 15px;
  }
  section div p:first-child {
    color: rgba(0, 0, 0, 0.5);
  }
  section div p:last-child {
    color: #2a6fc3;
  }
  section p img {
    height: 1em;
  }
  button {
    width: 100%;
    background: none;
    border-radius: 2px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    padding: 8px 16px;
  }
  </style>
  