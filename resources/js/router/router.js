import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import store from "../store";
import Index from '../components/app/Index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Login',
            path: '/login',
            component: Login
        },
        {
            name: 'Register',
            path: '/register',
            component: Register
        },
        {
            meta: {
                requiresAuth:true
            },
            name: 'Index',
            path: '/',
            component: Index
        }
    ],
})

router.beforeEach((to, from, next) => {
    const token = store.getters.getAccessToken
    if(to.meta.requiresAuth) {
        if(token) {
            next()
        } else {
            next('/login')
        }
    } else {
        if(to.path == '/login' || to.path == '/register') {
            if(!token) {
                next()
            } else {
                next('/')
            }
        }
    }
})

export default router;
