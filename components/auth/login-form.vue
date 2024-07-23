<template>
  <form class="p-4 flexed-column center" @submit.prevent="handleLogin">
    <h2 class="mb-3">Sign In</h2>
    <div class="flexed-column mb-1 fields">
      <label for="email" class="left flexed-row mb-1"
        >Email&nbsp;<span>(Required)</span></label
      >
      <input
        type="email"
        name="email"
        class="mb-2"
        placeholder="Johndoe@gmail.com"
        v-model="email"
        required
      />

      <label for="password" class="left flexed-row mb-1"
        >Password&nbsp;<span>(Required)</span></label
      >
      <input
        type="password"
        class="mb-1"
        placeholder="********"
        name="password"
        v-model="password"
        required
      />

      <a href="#" class="right mb-2">Forgot Password?</a>
    </div>

    <button class="p-2 mb-2" type="submit">Sign In</button>
    <p class="mb-2">-OR-</p>
    <p>
      Don't have an account?
      <a href="#" class="weight-7">Sign Up</a>
    </p>

    <ToastNotification
      v-for="(toast, index) in toasts"
      :key="index"
      :type="toast.type"
      :title="toast.title"
      :description="toast.description"
      :timer="toast.timer"
      @close="removeToast(index)"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import ToastNotification from "@/components/toastNotification.vue";

const toasts = ref([]); //Empty Array for toast notifications

const showToast = (type, title, description) => {
  toasts.value.push({ type, title, description, timer: 5000 }); //Show toast Method
};

const removeToast = (index) => {
  toasts.value.splice(index, 1); //Remove toast method
};

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const response = await fetch("https://api.zukonu.xyz/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData);
      showToast("error", "Error", `${errorData.message}`);

      return;
    }

    const data = await response.json();
    console.log("Success:", data);
    showToast("success", "Signup Successful", `${data.message}`);
  } catch (err) {
    console.error("Unexpected error:", err);
  }

  window.location.href = "/user";
};
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
form > div > a  {
  color: #fe4a23;
}
input {
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
button {
  width: 100%;
  border-radius: 2px;
  background: #121212;
  color: #ffffffff;
}
</style>
