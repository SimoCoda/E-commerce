<template>
    <div class="flex bg-white w-[414px] h-16 border-b-2 border-black mb-5 fixed xl:w-[1920px] xl:h-36 md:w-[834px] md:h-28">
        <img src="../assets/image/logo-K.png" class="h-9 relative left-7 top-1 xl:h-24 xl:top-4 xl:left-12 md:h-16 md:left-28 md:top-4" @click="goHome" />
        <div v-if="cartStore.cart.items != 0">
            <img src="../assets/image/cart.png" class="h-8 m-1 relative left-[325px] top-1 xl:h-24 xl:top-3 xl:left-[1680px] md:h-[70px] md:left-[585px] md:top-3" @click="goCart"/>
            <div class="absolute left-[382px] top-4 h-4 w-4 text-center rounded-full items-center justify-center bg-red-600 text-white text-xs xl:left-[1830px] xl:h-10 xl:w-10 xl:text-4xl xl:top-5 md:h-8 md:w-8 md:text-xl md:left-[690px] md:top-6">
                {{cartStore.itemsInCart}}
            </div>
        </div>
        <div v-else>
            <img src="../assets/image/cart.png" class="h-8 m-1 relative left-[325px] top-1 xl:h-24 xl:top-3 xl:left-[1680px] md:h-[70px] md:left-[585px] md:top-3" @click="goCart"/>
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