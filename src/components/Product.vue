<template>
    <div class="border-2 border-black">
        <div class="w-40" @click="goInfo">
            <img :src="product.image"/>
            <h2 class="font-bold text-left pt-1 pl-1 text-base">{{product.name}}</h2>
            <h3 class="font-light text-left pl-1 text-[19px]">{{product.price}}€</h3>
        </div>
        <button class="text-[10px] border-[0,5px] h-6 w-16 m-2 relative left-9 text-white bg-slate-400 hover:bg-slate-800 border-black " @click="cartStore.addItemToCart(product)">Add to cart</button>
    </div>
</template>

<script>
import {useRouter} from 'vue-router';
import { useCartStore } from '../stores/cartStore';

export default {
    name: "Product",
    props:["product"],
    setup(props){
        const router = useRouter()
        const cartStore = useCartStore()
        

        const goInfo = () => {
            if(props.product.name === null || props.product.name.trim() === ""){
                router.push('/')
            }else{
                router.push(`/productDetail/${props.product.name}`)
            }
        }

        return {goInfo,cartStore}
    }
}
</script>