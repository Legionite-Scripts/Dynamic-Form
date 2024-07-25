<template>
  <div v-if="show" class="modal-overlay" @click="close">
    <div class="modal-content center p-2" @click.stop>
      <button class="close-button mb-4" @click="close">
        <img src="@/assets/icons/Layout/close-icon.svg" alt="" />
      </button>
      <h2 class="weight-4 mt-5">Update Profile</h2>
      <form @submit.prevent="submitForm">
        <div class="container">
          <div class="form-group">
            <section
              class="upload-pic p-4 center"
              title="Upload Profile Picture"
            >
              <img
                src="@/assets/icons/User-Dashboard/upload.svg"
                alt="Upload"
                class="mb-1"
              />
              <input
                type="file"
                class="mb-1"
                accept=".png, .jpeg, .webp"
                ref="fileInput"
              />
              <p class="weight-3">Upload Profile Picture (2mb max)</p>
            </section>
          </div>
        </div>

        <div class="container">
          <div class="form-group">
            <label for="Bio">Bio</label>
            <textarea
              name=""
              id="bio"
              cols="30"
              rows="10"
              placeholder="Input Bio"
              v-model="bioInput"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="submitBtn">Submit</button>
      </form>
    </div>
    <toastNotification
      v-for="(toast, index) in toasts"
      :key="index"
      :type="toast.type"
      :title="toast.title"
      :description="toast.description"
      :timer="toast.timer"
      @close="removeToast(index)"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const toasts = ref([]);

const showToast = (type, title, description) => {
  toasts.value.push({ type, title, description, timer: 5000 });
};

const removeToast = (index) => {
  toasts.value.splice(index, 1);
};

const props = defineProps({
  show: Boolean,
});

const emits = defineEmits(["close"]);

const fileInput = ref(null);
const bioInput = ref("");
const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjlmN2EzZjE0Y2U2MDlkY2YyMmRhNGYiLCJpYXQiOjE3MjE4Mzg4ODUsImV4cCI6MTcyMzU2Njg4NX0.H-j_Io7zTcySrVP--yzEnIoDxKQ4COlgu1PZHe7CIKQ";

const close = () => {
  emits("close");
};

const submitForm = async () => {
  const formData = new FormData();
  const file = fileInput.value.files[0];
  if (file) {
    formData.append("profilePhoto", file);
  }
  formData.append("bio", bioInput.value);

  // Log formData contents
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  try {
    const { data, error } = await useFetch(
      "https://api.zukonu.xyz/api/v1/profiles",
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${access_token}`, // Access token for user
        },
      }
    );

    if (error.value) {
      console.error("Error submitting form:", error.value);
      console.error("Error details:", error.value.data);
    } else {
      console.log("Form submitted successfully:", data.value);
      showToast("success", "Profile Updated Successfully", "");
      setTimeout(() => close(), 5000); //Set Delay of 5s before Modal Popup closes
      setTimeout(() => removeToast(), 5000); // Remove Toast Notification after 5s
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    if (err.response) {
      console.error("Response status:", err.response.status);
      console.error("Response data:", await err.response.text());
      showToast("error", "Error Updating Profile", `${err.message}`);
    }
  }
};
console.log("Done");
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7) !important ;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white !important;
  border-radius: 5px;
  position: relative;
  /* width: 20vw; */

  @media (width<768px) {
    width: 95%;
  }
}
.container {
  width: 100%;
  background: none;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
}
.form-group {
  margin-bottom: 10px;
}
.upload-pic {
  border-radius: 4px;
  background: #f2f2f2;
  cursor: pointer;
}
.submitBtn {
  background: #121212 !important;
}
</style>
