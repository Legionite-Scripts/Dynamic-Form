<template>
  <div class="wrapper center">
    <h2 class="weight-6 mb-2">Sign Up</h2>
    <form class="mb-2">
      <div class="container">
        <div class="form-group">
          <label for="">Account Type <span>*</span></label>
          <input type="text" placeholder="Merchant" />
        </div>

        <div class="form-group">
          <label for="">Last Name <span>*</span></label>
          <input type="text" placeholder="Doe" />
        </div>
      </div>

      <div class="container">
        <div class="form-group">
          <label for="">First Name <span>*</span></label>
          <input type="text" placeholder="John" />
        </div>

        <div class="form-group">
          <label for="">Email <span>*</span></label>
          <input type="email" placeholder="Johndoe@gmail.com" />
        </div>
      </div>

      <div class="form-group">
        <label for="">Password <span>*</span></label>
        <input type="email" placeholder="*********" />
      </div>

      <!-- <button @click="$emit('back')">Back</button> -->
      <button @click="$emit('next')" @click.prevent>Next</button>
    </form>

    <p>Nothing serious here <a href="#">click here</a></p>
  </div>
</template>

<script setup></script>

<style scoped>
.wrapper {
  width: 50% !important;
  @media (width<768px) {
    width: 100% !important;
  }
}
form {
  background: #fff;
}
button {
  background: #1472ff;
}
p {
  color: #8e8e8e;
}
p a {
  color: #1472ff;
  text-decoration: underline !important;
}
label span{
  color: #FF4A22;
}
</style>
