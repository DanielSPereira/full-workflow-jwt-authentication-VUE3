import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/',        component: () => import(/* webpackChunkName: "Home"   */  './pages/Home.vue')  },
    { path: '/login',   component: () => import(/* webpackChunkName: "Login"  */  './pages/Login.vue') },
    { path: '/secret',  component: () => import(/* webpackChunkName: "Secret"  */ './pages/Secret.vue') },
]

export default createRouter({
    history: createWebHashHistory(),
    routes, 
})