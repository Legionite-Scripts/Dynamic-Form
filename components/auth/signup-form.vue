<template>
  <form class="p-4 flexed-column center" @submit.prevent="handleSignup">
    <h2 class="mb-3">Sign Up</h2>
    <div class="flexed-column mb-1 fields">
      <label for="accountType" class="left flexed-row mb-1"
        >Account Type&nbsp;<span>*</span></label
      >
      <select v-model="accountType" class="mb-2" name="accountType" required>
        <option value="">Merchant</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <label for="lastname" class="left flexed-row mb-1"
        >Last Name&nbsp;<span>*</span></label
      >
      <input
        type="text"
        class="mb-2"
        name="lastname"
        placeholder="Doe"
        v-model="lastName"
        required
      />

      <label for="firstname" class="left flexed-row mb-1"
        >First Name&nbsp;<span>*</span></label
      >
      <input
        type="text"
        class="mb-2"
        name="firstname"
        placeholder="John"
        v-model="firstName"
        required
      />

      <label for="email" class="left flexed-row mb-1"
        >Email&nbsp;<span>*</span></label
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
        >Password&nbsp;<span>*</span></label
      >
      <input
        type="password"
        placeholder="********"
        name="password"
        v-model="password"
        required
      />
    </div>

    <div class="flexed-row center terms">
      <input type="checkbox" class="checkbox" name="terms" required />&nbsp;
      <label for="terms">
        I accept <a href="#" class="weight-7">Terms & Conditions</a></label
      >
    </div>

    <button class="p-2" type="submit">Sign Up</button>
    <p>-OR-</p>
    <p>
      Already have an account?
      <NuxtLink to="login">
        <a href="#" class="weight-7">Sign In</a></NuxtLink
      >
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
  toasts.value.push({ type, title, description, timer: 5000 }); //Showtoast Method
};

const removeToast = (index) => {
  toasts.value.splice(index, 1); //Remove toast method
};

const accountType = ref("");
const lastName = ref("");
const firstName = ref("");
const email = ref("");
const password = ref("");

//Options for the select tag
const options = [
  { value: "Merchant", label: "Merchant" },
  { value: "Transporter", label: "Transporter" },
];

const handleSignup = async () => {
  try {
    const response = await fetch("http://54.196.246.58/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accountType: accountType.value,
        lastName: lastName.value,
        firstName: firstName.value,
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

    // Redirect to the login page after successful signup
    // router.push("/login");
  } catch (err) {
    console.error("Unexpected error:", err);
  }
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
    /* width: 100vw; */
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
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>')
    no-repeat right center;
  background-size: 20px 20px;
  background-position: 98% center;
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
