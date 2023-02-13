<template>
    <div class="mb-16 flex">
        <div v-if="cartStore.cart.items != 0">
            <div v-for="(item, i) in cartStore.cart.items" :key="item.product.name" class="mt-4 mb-3 ml-0 pt-2 pb-2 flex bg-slate-200 items-center justify-center w-[414px] xl:w-[1920px] xl:h-48 xl:-mt-1 md:w-[834px] md:h-32">
                <div class="">
                    <img :src="item.product.image" class="h-[70px] mr-4 border-[1px] border-black xl:h-[160px] xl:mr-44 md:h-[110px] md:mr-20"/>
                </div>
                <div class="flex w-14 mr-14 items-center justify-center xl:w-32 md:w-24">
                    <h1 class="text-[15px] font-bold m-auto xl:text-4xl md:text-3xl">{{ item.product.name }} <span class="text-[14px] xl:text-3xl md:text-2xl"> {{ item.subtotal }} €</span></h1>  
                </div>
                <div class="mr-4 flex items-center justify-center border-[0.5px] border-slate-300 xl:ml-36 xl:border-2 xl:h-20 xl:w-[240px] md:ml-16 md:border-2 md:h-16 md:w-[150px]">
                    <div class="w-10 border-r-[0.5px] border-slate-300 xl:border-r-2 xl:h-20 xl:w-10 md:border-r-2 md:h-16">
                        <div v-if="item.quantity > 1" class="md:w-16">    
                            <button @click="cartStore.decreseItemFromCart(item.product,i, item.quantity)" class="m-2 font-bold xl:text-4xl xl:mt-4 xl:-ml-12 md:text-3xl md:-ml-8 md:w-16 md:mt-3">-</button>
                        </div>
                        <div v-else class="md:w-16">
                            <button @click="cartStore.removeItemFromCart(i, item.quantity)" class="m-2 font-bold xl:-ml-12 md:-ml-6"><img src="../assets/image/basket.png" class="h-4 xl:h-6 xl:mt-4 md:mt-3 md:h-6"/></button>
                        </div>
                    </div>
                    <div class="w-10 xl:w-20"><h1 class="text-xl xl:text-5xl xl:w-20 md:text-4xl">{{ item.quantity }}</h1></div>
                    <div class="w-10  border-l-[0.5px] border-slate-300 xl:border-l-2 md:border-l-2">
                        <button @click="cartStore.addItemToCart(item.product)" class="m-2 font-bold xl:text-4xl xl:h-20 xl:m-0 xl:w-20 md:text-3xl md:h-12 md:-ml-1 md:w-16">+</button>
                    </div>
                </div>
                <img src="../assets/image/basket.png" @click="cartStore.removeItemFromCart(i, item.quantity)" class="h-4 ml-2 xl:h-10 xl:ml-16 md:h-7 md:ml-9"/>
            </div>
            <h1 class="text-right mt-7 mb-10 pr-4 text-lg xl:text-3xl xl:mt-10 xl:mb-20 xl:mr-10 md:text-3xl md:mt-10 md:mb-20">Total price: <span class="text-xl xl:text-4xl md:text-4xl">{{ cartStore.cart.total }} €</span></h1>
        </div>
        <div v-else class="w-[414px] mt-16 xl:w-[1920px] xl:mt-36 md:w-[834px] md:mt-32">
            <h1 class="text-center text-3xl text-slate-300 xl:text-6xl md:text-5xl">Il carrello è vuoto!</h1>
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
