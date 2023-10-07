import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue'
import Product from '../components/Product.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
    {
        path: '/', component: Dashboard
    },
    {
        path: '/products', component: ProductList
    },
    {
        path: '/product/:id', component: Product, 'name': 'product'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router