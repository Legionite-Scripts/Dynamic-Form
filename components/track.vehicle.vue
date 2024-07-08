<template>
    <section class="container flexed-column p-2">
      <img src="@/assets/icons/bus-thin.svg" alt="bus" class="mb-1" />
      <h3 class="weight-5 mb-2">Vehicle 1</h3>
      <div class="center flexed-row mb-2">
        <p class="flexed-row text-center center weight-4">
          <img src="@/assets/icons/location.svg" alt="location" />
          &nbsp;&nbsp;Route
        </p>
  
        <p class="weight-4">Lagos Nigeria - Accra Ghana</p>
      </div>
  
      <div class="center flexed-row mb-2">
        <p class="flexed-row text-center center weight-4">
          <img src="@/assets/icons/driver.svg" alt="driver" />
          &nbsp;&nbsp;Driver
        </p>
  
        <p class="weight-4">Johnson Agumah</p>
      </div>
  
      <div class="center flexed-row mb-2">
        <p class="flexed-row text-center center weight-4">
          <img src="@/assets/icons/wifi-thin.svg" alt="wifi" />
          &nbsp;&nbsp;Status
        </p>
  
        <p class="weight-4">Active</p>
      </div>
  
      <div class="center flexed-row mb-2">
        <p class="flexed-row text-center center weight-4">
          <img src="@/assets/icons/hashtag.svg" alt="hashtag" />
          &nbsp;&nbsp;Number
        </p>
  
        <p class="weight-4">Active</p>
      </div>
  
      <h3 class="weight-4 mb-1">Vehicle Description</h3>
      <p class="weight-3 mb-3">
        Lorem ipsum dolor sit amet consectetur. Amet nisi in in suscipit neque
        bibendum. Id morbi eu lacus sit accumsan eget tristique pretium feugiat.
      </p>
  
      <button class="p-1 weight-5">Track Vehicle Location</button>
    </section>
  </template>
  
  <script></script>
  
  <style scoped>
  section {
    border-radius: 4px;
    background: #fff !important;
  }
  section > img {
    width: 2em;
  }
  section > div {
    justify-content: space-between;
  }
  section > div > p:first-child {
    color: #818180;
  }
  section > div > p:last-child {
    color: #2b6ec3;
  }
  section > p {
    line-height: 1.2em;
  }
  section > button {
    border-radius: 2px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    background: none;
  }
  </style>
  