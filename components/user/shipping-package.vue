<template>
  <form>
    <h2 class="weight-5">Package 1</h2>

    <div class="container">
      <div class="form-group">
        <h3>Type of Products</h3>
        <p>Perishable Goods</p>
      </div>

      <div class="form-group">
        <h3>Package Items</h3>
        <p>Item 1, Item 2, Item, Item 4, Item 5</p>
      </div>
    </div>

    <div class="container">
      <div class="form-group">
        <h3>Size</h3>
        <p>Standard Handling</p>
      </div>

      <div class="form-group">
        <h3>Temperature</h3>
        <p>Normal</p>
      </div>
    </div>

    <div class="container">
      <div class="form-group">
        <h3>Destination Requirement</h3>
        <p>International</p>
      </div>

      <div class="form-group">
        <h3>Destination Requirement</h3>
        <p>International</p>
      </div>
    </div>

    <button class="weight-5"><NuxtLink to="/user/shipping-management/edit-package">Edit Package</NuxtLink></button>
  </form>
</template>

<script></script>

<style scoped>
form {
  border-radius: 8px;
  border: 1.545px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.181px 12.361px 0px rgba(0, 0, 0, 0.04);

}
form h3 {
  font-weight: 500;
  color: #3e3e3e;
}
form p {
  font-weight: 300;
  color: #3e3e3e;
}
.form-group {
  padding: 8px;
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
}
button {
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  background: none;
  color: #121212;
}
</style>
