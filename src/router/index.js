import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
 
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/views/Registeration.vue')
  },
  {
    path: '/my_account',
    name: 'MyAccount',
    component: () => import('@/views/MyAccount.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/ForgotPassword.vue')
  },

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
