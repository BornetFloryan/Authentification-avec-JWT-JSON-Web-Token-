<template>
  <div class="signin">
    <h1 class="title">Connexion</h1>
    <form @submit.prevent="signin" class="form">
      <div class="form-group">
        <label for="email">Adresse e-mail</label>
        <input id="email" type="email" v-model="email" placeholder="Entrez votre e-mail" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input id="password" type="password" v-model="password" placeholder="Entrez votre mot de passe" required />
      </div>
      <button type="submit" class="btn">Se connecter</button>
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
        let errorMessage = 'Erreur lors de la connexion';
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
.signin {
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