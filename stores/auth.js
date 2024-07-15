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
        const response = await axios.post('http://54.196.246.58:8002/api/v1/auth/signup', form);
        this.user = response.data;
        this.error = null;
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
      }
    },
    async login(credentials) {
      try {
        const response = await axios.post('http://54.196.246.58:8002/api/v1/auth/login', credentials);
        this.user = response.data;
        this.error = null;
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
      }
    },
  },
});
