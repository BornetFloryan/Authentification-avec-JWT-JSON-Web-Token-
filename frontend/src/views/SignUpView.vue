<template>
  <div class="signup">
    <h1 class="title">Inscription</h1>
    <form @submit.prevent="signup" class="form">
      <div class="form-group">
        <label for="firstname">Prénom</label>
        <input id="firstname" type="text" v-model="firstname" placeholder="Entrez votre prénom" required />
      </div>
      <div class="form-group">
        <label for="lastname">Nom</label>
        <input id="lastname" type="text" v-model="lastname" placeholder="Entrez votre nom" required />
      </div>
      <div class="form-group">
        <label for="email">Adresse e-mail</label>
        <input id="email" type="email" v-model="email" placeholder="Entrez votre e-mail" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input id="password" type="password" v-model="password" placeholder="Entrez votre mot de passe" required />
      </div>
      <button type="submit" class="btn">S'inscrire</button>
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
        let errorMessage = 'Erreur lors de l\'inscription';
        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
        alert(errorMessage);
      }
    }
  }
};
</script>

<style scoped>
.signup {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.btn {
  padding: 10px 15px;
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