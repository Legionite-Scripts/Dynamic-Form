<template>
    <div class="container">
      <h2 class="weight-6 mb-2">Third Form</h2>
      <form class="mb-2">
        <div class="form-group">
          <label for="">Question 1</label>
          <input type="text" placeholder="Answer 1" />
        </div>
  
        <div class="form-group buttons">
          <button @click="$emit('back')" @click.prevent>Back</button>
          <button @click.prevent>Finish</button>
        </div>
      </form>
  
      <p>Nothing serious here <a href="#">click here</a></p>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .container {
    width: 50% !important;
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
  </style>
  