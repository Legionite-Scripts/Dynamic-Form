<template>
  <div :class="['sidebar', { 'sidebar--open': isOpen }]" @click.self="closeSidebar">
    <div class="sidebar-content flexed-column">
      <button @click="closeSidebar" class="sidebar__close-button right">
        <img src="@/assets/icons/Layout/close-icon.svg" alt="Hamburger" />
      </button>

      <div class="container mt-5">
        <div class="hero center flexed-row mb-3">
          <img src="@/assets/images/general/hero.png" alt="Hero" class="border-round" />

          <div>
            <h4 class="weight-5">Lorem Ipsum Founder</h4>
            <p class="weight-4">loremupsum@hotmail.com</p>
          </div>
        </div>
        <!--  -->
        <NuxtLink class="sidebar-link" to="/user">
          <div class="inner">
            <img src="@/assets/icons/Layout/home-outline.svg" alt="Home Outline" />
            <p class="weight-4">Home</p>
          </div>
        </NuxtLink>
        <!--  -->
        <NuxtLink class="sidebar-link" to="/user/profile">
          <div class="inner">
            <img src="@/assets/icons/Layout/profile.svg" alt="Profile Outline" />
            <p class="weight-4">My Profile</p>
          </div>
        </NuxtLink>
        <!--  -->
        <NuxtLink class="sidebar-link" to="/user/circle-management/circles">
          <div class="inner">
            <img src="@/assets/icons/Layout/videos.svg" alt="Videos Outline" />
            <p class="weight-4">Circle</p>
          </div>
        </NuxtLink>
        <!--  -->
        <NuxtLink class="sidebar-link" to="/user/shipping-management">
          <div class="inner">
            <img src="@/assets/icons/Layout/note.svg" alt="Note Outline" />
            <p class="weight-4">Shipping Management</p>
          </div>
        </NuxtLink>
        <!--  -->
        <NuxtLink class="sidebar-link" to="/user/address-management">
          <div class="inner">
            <img src="@/assets/icons/Layout/address.svg" alt="Note Outline" />
            <p class="weight-4">Address Management</p>
          </div>
        </NuxtLink>

        <!--  -->
        <NuxtLink class="sidebar-link" to="/user">
          <div class="inner">
            <img src="@/assets/icons/Layout/settings.svg" alt="Settings Outline" />
            <p class="weight-4">Settings</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeSidebar = () => {
  emit("close");
};
</script>

<style scoped>
* {
  color: #121212 !important;
}
.sidebar {
  position: fixed;
  top: 0;
  left: -20vw;
  width: 20vw;
  height: 100%;
  transition: left 0.3s ease;
  z-index: 1000;

  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background: #f2f2f2;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.03);

  @media (width<1200px) {
    left: -100%;
    width: fit-content !important;
  }

  @media (width<768px) {
    left: -100%;
    width: 100% !important;
  }
}
.sidebar-content{
  padding: 42px 16px !important;
}
.sidebar--open {
  left: 0;
}
.sidebar__close-button {
  background: none;
  border: none;
  cursor: pointer;
  align-self: right;
}
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}
.hero {
  gap: 10px;
}
.hero p{
  font-size: 12px !important;
}
.hero img {
  width: 3em;
  height: 3em;
}
.sidebar-link .inner {
  width: 100% !important;
  display: grid;
  grid-template-columns: 1fr 100%;
  gap: 12px;
  padding: 12px 16px;
}
.sidebar p {
  color: #3e3e3e;
}
.sidebar-link:last-child {
  position: fixed !important;
  bottom: 0;
  margin-bottom: 1em;
}
</style>
