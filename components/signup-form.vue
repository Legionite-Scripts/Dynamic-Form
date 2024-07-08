<template>
  <form class="p-3 flexed-column center">
    <h2 class="mb-3">Sign Up</h2>
    <div class="flexed-column mb-1 fields">
      <label for="accountType" class="left flexed-row mb-1"
        >Account Type&nbsp;<span>(Required)</span></label
      >
      <select v-model="selectedOption" class="mb-2" name="accountType" required>
        <option value="">Platform User</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <label for="lastname" class="left flexed-row mb-1"
        >Last Name&nbsp;<span>(Required)</span></label
      >
      <input
        type="text"
        class="mb-2"
        name="lastname"
        placeholder="Doe"
        required
      />

      <label for="firstname" class="left flexed-row mb-1"
        >First Name&nbsp;<span>(Required)</span></label
      >
      <input
        type="text"
        class="mb-2"
        name="firstname"
        placeholder="John"
        required
      />

      <label for="email" class="left flexed-row mb-1"
        >Email&nbsp;<span>(Required)</span></label
      >
      <input
        type="email"
        name="email"
        class="mb-2"
        placeholder="Johndoe@gmail.com"
        required
      />

      <label for="password" class="left flexed-row mb-1"
        >Password&nbsp;<span>(Required)</span></label
      >
      <input type="password" placeholder="********" name="password" required />
    </div>

    <div class="flexed-row center terms mb-3">
      <input type="checkbox" class="checkbox" name="terms" />&nbsp;
      <label for="terms">
        I accept <a href="#" class="weight-7">Terms & Conditions</a></label
      >
    </div>

    <button class="p-2 mb-2">Sign Up</button>
    <p class="mb-2">-OR-</p>
    <p>Already have an account? <a href="#" class="weight-7">Sign In</a></p>
  </form>
</template>

<script setup>
import { ref } from "vue";

const selectedOption = ref("");
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
</script>
<style scoped>
* {
  color: #1e1e1e;
}
form {
  width: 100%;
  background-color: #ffffff;

  @media (width<1000px) {
    width: 100vw;
    height: 100vh !important;
    overflow-y: auto;
  }
}
form > div {
  width: 100%;
}
label {
  color: #4b4a4a;
}
label > span {
  color: #fe4a23;
}
input,
select {
  height: 3em !important;
  border: 1.5px solid #e1e2e7;
  background: transparent;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.03);
  border-radius: 2px;
}
input::placeholder,
select {
  color: #8e8f8e;
}
form > div.checklist {
  align-items: flex-start;
}
form > div.terms > input[type="checkbox"] {
  height: 2em;
  width: 2em;
}
button {
  width: 100%;
  border-radius: 2px;
  background: #121212;
  color: #ffffffff;
}
</style>
