<template>
  <div class="home">
    <h1 v-if="isAuthenticated">Bienvenue, {{ user.username }}</h1>
    <p v-if="isAuthenticated">Token d'accès : {{ accessToken }}</p>
    <p v-if="isAuthenticated">Token de rafraîchissement : {{ user.refreshToken }}</p>
    <button v-if="isAuthenticated" @click="signout" class="btn">Se déconnecter</button>
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
      this.$router.push('/connexion');
    }
  },
  methods: {
    signout() {
      AuthService.logout();
      this.isAuthenticated = false;
      this.user = {};
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.home {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

p {
  color: #555;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>