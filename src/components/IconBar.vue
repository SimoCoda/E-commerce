<template>
    <div class="flex bg-white w-96 h-16 border-b-2 border-black mb-5 fixed">
        <img src="../assets/image/logo-K.png" class="h-9 relative left-7 top-1" @click="goHome" />
        <div v-if="cartStore.items != 0">
            <img src="../assets/image/cart.png" class="h-8 m-1 relative left-72 top-1" @click="goCart"/>
            <div class="absolute left-[346px] top-4 h-4 w-4 text-center rounded-full items-center justify-center bg-red-600 text-white text-xs">{{cartStore.cart.cartLength}}</div>
        </div>
        <div v-else>
            <img src="../assets/image/cart.png" class="h-8 m-1 relative left-72 top-1" @click="goCart"/>
        </div>    
    </div>
</template>

<script>
import { useRouter, } from 'vue-router';
import { useCartStore } from '../stores/cartStore';

export default {
    name: "IconBar",
    setup(){
        const router = useRouter()
        const cartStore = useCartStore()
        
        function goCart(){
            router.push('/cart')
        }
        
        const goHome = () => {
            router.push('/')
        }
        
        return {goCart, goHome, cartStore,} 
    }
}
</script>