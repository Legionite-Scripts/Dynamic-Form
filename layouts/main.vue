<template>
    <div>
      <Navbar @open="openSidebar" />
    <Sidebar :isOpen="isSidebarOpen" @close="closeSidebar"/>
      <!-- Sidebar content goes here -->
      <slot />
    </div>
  </template>

<script setup>
import { ref } from 'vue'
// import Navbar from '~/components/Navbar.vue'
// import Sidebar from '~/components/Sidebar.vue'

const isSidebarOpen = ref(false)

const openSidebar = () => {
  isSidebarOpen.value = true
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>
  
