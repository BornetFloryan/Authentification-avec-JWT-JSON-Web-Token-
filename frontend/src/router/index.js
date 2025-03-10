import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignInView from '@/views/SignInView.vue';
import SignUpView from '@/views/SignUpView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/signin' },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/signin', name: 'signin', component: SignInView },
    { path: '/signup', name: 'signup', component: SignUpView }
  ]
});