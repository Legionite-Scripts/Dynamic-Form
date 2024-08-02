<template>
  <div class="wrapper center">
    <h2 class="weight-6 mb-2">Log In</h2>
    <form class="mb-2">
      <div class="container">
        <div class="form-group">
          <label for="">Email <span>*</span></label>
          <input type="email" placeholder="Answer 1" />
        </div>

        <div class="form-group">
          <label for="">Password <span>*</span></label>
          <input type="password" placeholder="Answer 1" />
        </div>
      </div>

      <div class="form-group buttons">
        <button @click="$emit('back')" @click.prevent>Back</button>
        <button @click="$emit('next')" @click.prevent>Next</button>
      </div>
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
.buttons {
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.buttons button:first-child {
  border: 2px solid #1472ff;
  color: #1472ff;
  background: none;
}
.buttons button:last-child {
  background: #1472ff;
}
p {
  color: #8e8e8e;
}
p a {
  color: #1472ff;
  text-decoration: underline !important;
}
label span {
  color: #ff4a22;
}
</style>
