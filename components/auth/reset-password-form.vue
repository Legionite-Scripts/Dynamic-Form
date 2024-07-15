<template>
  <form class="p-3 flexed-column center">
    <h2 class="mb-3">Reset Password</h2>
    <div class="flexed-column mb-2 fields">
      <label for="password" class="left flexed-row mb-1">New Password</label>
      <input type="password" placeholder="********" name="password" required />
    </div>

    <div class="flexed-column mb-2 checklist">
      <p>
        <img src="@/assets/icons/check.png" alt="check" /> At least 8 characters
      </p>
      <p>
        <img src="@/assets/icons/check.png" alt="check" />At least a special
        character
      </p>
      <p>
        <img src="@/assets/icons/check.png" alt="check" />At least 1 numerical
        character
      </p>
      <p>
        <img src="@/assets/icons/check.png" alt="check" />At least 1 upper case
        character
      </p>
      <p>
        <img src="@/assets/icons/check.png" alt="check" />At least 1 lower case
        character
      </p>
    </div>
    <div class="fields flexed-column mb-2">
      <label for="confirm-password" class="left flexed-row mb-1"
        >Confirm Password</label
      >
      <input
        type="password"
        placeholder="********"
        class="mb-1"
        name="confirm-password"
        required
      />
      <p><img src="@/assets/icons/check.png" alt="check" />Password match</p>
    </div>


    <NuxtLink to="signup" class="nuxt-link">

      <button class="p-1 mb-2">Sign Up</button>
    </NuxtLink>
  </form>
</template>

<script setup></script>
<style scoped>
* {
  color: #1e1e1e;
}
form {
  width: 100%;
  background-color: #ffffff;

  @media (width<1000px) {
    /* width: 100vw; */
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
input {
  height: 3em !important;
  border: 1.5px solid #e1e2e7;
  background: transparent;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.03);
  border-radius: 2px;
}
input::placeholder {
  color: #8e8f8e;
}

button{
  width: 100% !important;
  border-radius: 2px;
  background: #121212;
  color: #ffffffff;
}
</style>
