import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/pages/Home.vue";
import AboutView from "@/pages/About.vue";
import ContactView from "@/pages/Contact.vue";
import CoursesView from "@/pages/Courses.vue";
import EventsView from "@/pages/Events.vue";
import TeachersView from "@/pages/Teachers.vue";
import BlogView from "@/pages/Blog.vue";
import ShopView from "@/pages/Shop.vue";

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
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/courses',
        name: 'courses',
        component: CoursesView
    },
    {
        path: '/events',
        name: 'events',
        component: EventsView
    },
    {
        path: '/teachers',
        name: 'teachers',
        component: TeachersView
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogView
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export  default  router