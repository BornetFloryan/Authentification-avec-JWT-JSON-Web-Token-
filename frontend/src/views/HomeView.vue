<template>
  <div class="home">
    <h1 v-if="isAuthenticated">Welcome, {{ user.firstName }} {{ user.lastName }}</h1>
    <p v-if="isAuthenticated">Email: {{ user.email }}</p>
    <button v-if="isAuthenticated" @click="signout">Sign Out</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      user: {},
      isAuthenticated: false
    };
  },
  async beforeCreate() {
    try {
      const response = await axios.get('http://localhost:3000/user', {withCredentials: true});
      this.user = response.data;
      this.isAuthenticated = true;
    } catch (error) {
      console.warn('User is not authenticated, redirecting...');
      this.$router.push('/');
    }
  },
  methods: {
    async signout() {
      try {
        await axios.post('http://localhost:3000/signout', {}, {withCredentials: true});
        this.isAuthenticated = false;
        this.user = {};
        this.$router.push('/');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    }
  }
}
</script>