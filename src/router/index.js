import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/pages/Home.vue";
import AboutView from "@/pages/About.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export  default  router