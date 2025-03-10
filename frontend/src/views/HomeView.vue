<template>
  <div class="home">
    <h1 v-if="isAuthenticated">Welcome, {{ user.username }}</h1>
    <p v-if="isAuthenticated">Access Token: {{ accessToken }}</p>
    <p v-if="isAuthenticated">Refresh Token: {{ user.refreshToken }}</p>
    <button v-if="isAuthenticated" @click="signout">Sign Out</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'HomeView',
  data() {
    return {
      user: {},
      isAuthenticated: false,
      accessToken: ''
    };
  },
  created() {
    const user = AuthService.getUser();
    console.log(user);
    if (user) {
      this.user = user;
      this.isAuthenticated = true;
      this.accessToken = AuthService.getAccessToken();
    } else {
      this.$router.push('/signin');
    }
  },
  methods: {
    signout() {
      AuthService.logout();
      this.isAuthenticated = false;
      this.user = {};
      this.$router.push('/signin');
    }
  }
}
</script>