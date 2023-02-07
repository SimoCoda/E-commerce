<template>
    <div class="mb-16 flex">
        <div v-if="cartStore.cart.items != 0">
            <div v-for="(item, i) in cartStore.cart.items" :key="item.product.name" class="mt-4 mb-5 ml-0 pt-3 pb-3 flex bg-slate-200 items-center justify-center w-[390px]">
                <div class="">
                    <img :src="item.product.image" class="h-[70px] mr-4 border-[1px] border-black"/>
                </div>
                <div class="flex w-14 mr-14 items-center justify-center">
                    <h1 class="text-[15px] font-bold m-auto">{{ item.product.name }} <span class="text-[14px]"> {{(item.subtotal).toFixed(2)}} €</span></h1>  
                </div>
                <div class="mr-4 flex items-center justify-center border-[0.5px] border-slate-300">
                <div class="w-10 border-r-[0.5px] border-slate-300">
                    <div v-if="item.quantity > 1">    
                        <button @click="cartStore.decreseItemFromCart(item.product,i, item.quantity)" class="m-2 font-bold">-</button>
                    </div>
                    <div v-else>
                        <button @click="cartStore.removeItemFromCart(i, item.quantity)" class="m-2 font-bold"><img src="../assets/image/basket.png" class="h-4"/></button>
                    </div>
                </div>
                    <div class="w-10"><h1 class="text-xl">{{ item.quantity }}</h1></div>
                <div class="w-10  border-l-[0.5px] border-slate-300 ">
                    <button @click="cartStore.addItemToCart(item.product)" class="m-2 font-bold">+</button>
                </div>
                </div>
                <img src="../assets/image/basket.png" @click="cartStore.removeItemFromCart(i, item.quantity)" class="h-3 ml-2"/>
            </div>
            <h1 class="text-right pr-4">Total price: {{ cartStore.cart.total }} €</h1>
        </div>
        <div v-else class="w-[390px] mt-10">
            <h1 class="text-center text-3xl text-slate-300">Il carrello è vuoto!</h1>
        </div>
    </div>
</template>
npm run dev
<script>
import {useCartStore} from '../stores/cartStore';


export default{
    name: "CartList",
    setup(){
        const cartStore = useCartStore();

        return {cartStore,}
    }
    }
</script>
