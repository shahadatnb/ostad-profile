import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue'
import Profile from '../components/Profile.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import { authStore } from '../store/store'

const routes = [
    {
        path: '/', component: Dashboard,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/login', component: Login, 'name': 'login'
    },
    {
        path: '/register', component: Register, 'name': 'register'
    },
    {
        path: '/profile', component: Profile, 'name': 'profile',
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/logout', component: Profile, 'name': 'profile'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !authStore.isAuthenticated){
        next('/login')
    }else{
        next()
    }
})

export default router