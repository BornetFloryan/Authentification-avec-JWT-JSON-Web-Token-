<template>
  <div id="app">
    <nav v-if="showNav">
      <router-link to="/signin">Sign In</router-link>
      <router-link to="/signup">Sign Up</router-link>
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
    this.showNav = this.$route.name !== 'home';

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
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>