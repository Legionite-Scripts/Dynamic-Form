// stores/auth.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    error: null,
    email: '',
  }),
  actions: {
    setEmail(email) {
      this.email = email;
    },
    async signup(form) {
      try {
        const response = await axios.post('https://api.zukonu.xyz/api/v1/auth/signup', form);
        this.user = response.data;
        this.error = null;
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
      }
    },
    async login(credentials) {
      try {
        const response = await axios.post('https://api.zukonu.xyz/api/v1/auth/signup', credentials);
        this.user = response.data;
        this.error = null;
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
      }
    },
  },
});
