<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <form @submit.prevent="signup">
      <input type="text" v-model="firstname" placeholder="First Name" required />
      <input type="text" v-model="lastname" placeholder="Last Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'SignUpView',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async signup() {
      try {
        await AuthService.register({
          firstName: this.firstname,
          lastName: this.lastname,
          emailId: this.email,
          password: this.password
        });
        this.$router.push('/');
      } catch (error) {
        let errorMessage = 'Error signing up';
        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
        alert(errorMessage);
      }
    }
  }
}
</script>