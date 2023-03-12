import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home.vue';
import LoginView from '../views/Login.vue';
import RegisterView from '../views/Register.vue';

import { useUserStore } from '../stores/userStore.js';

const requireAuth = async(to, from, next) => {
  const userStore = useUserStore();
  userStore.loadingSession = true;

  const user = await userStore.currentUser();
  if (user) {
    next();
  }else{
    next('/login');
  }
  userStore.loadingSession = false;
};

const routes = [
  { path: '/', component: HomeView, beforeEnter: requireAuth },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;