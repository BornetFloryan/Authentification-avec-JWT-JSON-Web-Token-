// frontend/src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignInView from '@/views/SignInView.vue';
import SignUpView from '@/views/SignUpView.vue';
import AuthService from '@/services/AuthService';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = AuthService.getUser();

  if (requiresAuth && !isAuthenticated) {
    next('/signin');
  } else {
    next();
  }
});

export default router;