import { createRouter, createWebHashHistory } from 'vue-router';
import { privateRoute } from './helpers/privateRoute';

const routes = [
    { path: '/',        component: () => import(/* webpackChunkName: "Home"   */  './pages/Home.vue')  },
    { path: '/login',   component: () => import(/* webpackChunkName: "Login"  */  './pages/Login.vue') },
    { path: '/secret',  component: () => import(/* webpackChunkName: "Secret"  */ './pages/Secret.vue'), beforeEnter: privateRoute },
]

export default createRouter({
    history: createWebHashHistory(),
    routes, 
})