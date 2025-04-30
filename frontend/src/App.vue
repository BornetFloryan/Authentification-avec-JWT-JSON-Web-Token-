<template>
  <div id="app">
    <h1>Mini-projet 2 - Authentification avec JWT (JSON Web Token) : Floryan BORNET, Corentin BRENDLE</h1>
    <nav v-if="showNav">
      <router-link to="/signin">Se connecter</router-link>
      <router-link to="/signup">S'inscrire</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: true
    };
  },
  created() {
    if (this.$route && this.$route.name) {
      this.showNav = this.$route.name !== 'home';
    }

    this.$router.beforeEach((to, from, next) => {
      this.showNav = to.name !== 'home';
      next();
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 15px;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>