import {createRouter,createWebHistory} from 'vue-router'
import ProductsPage from '../pages/ProductsPage.vue'
import ProductDetailPage from '../pages/ProductDetailPage.vue'
import CartPage from '../pages/CartPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'ProductsPage',
        component: ProductsPage
    },
    {
        path: '/productDetail/:name',
        name: 'ProductDetail',
        component: ProductDetailPage
    },
    {
        path: '/cart',
        name: 'CartPage',
        component: CartPage
    },
    ]
})

export default router;