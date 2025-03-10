<template>
  <div class="signin">
    <h1>Sign In</h1>
    <form @submit.prevent="signin">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'SignInView',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async signin() {
      try {
        await AuthService.login({
          emailId: this.email,
          password: this.password
        });
        this.$router.push('/home');
      } catch (error) {
        let errorMessage = 'Error signing in';
        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
        alert(errorMessage);
      }
    }
  }
}
</script>