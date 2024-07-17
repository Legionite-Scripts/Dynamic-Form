    <template>
      <div class="sidebar">
        <button class="close-btn" @click="handleClose">
          close
        </button>
        <slot />
      </div>
    </template>

  <script>
  export default {
    methods: {
      handleClose() {
        this.$el.style.left = '-100%';
      }
    }
  };
  </script>

  <style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    background: transparent;
    cursor: pointer;
    border: 1px solid #333;
  }
  </style>
