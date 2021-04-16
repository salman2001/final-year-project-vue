import { createRouter, createWebHistory } from 'vue-router';
import HTMLeditor from "../views/HTMLeditor.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/htmleditor/:tags?',
    name: 'HTMLeditor',
    component: HTMLeditor,
    props: true
    
  },
  
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
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
  {
    path: '/data',
    name: 'data',
    component: () => import('@/views/data.vue')
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import('@/views/tags.vue')
  },
  {
    path: '/liveEditor',
    name: 'Editor',
    component: () => import('@/views/LiveHTMLeditor.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
