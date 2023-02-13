<template>
    <div class="ml-12 -mr-3 border-2 border-black xl:w-[520px] xl:h-[260px] xl:mr-0 xl:mb-16 md:space-x-16 md:ml-32 md:mr-16">
        <div class="w-40 xl:h-56 xl:w-[310px] xl:mr-28 xl:inline-flex md:h-64 md:w-[223px] " @click="goInfo">
            <img :src="product.image" class="xl:w-[256px] xl:h-[256px] xl:relative xl:top-7 xl:border-r-[1px] xl:border-black xl:-mt-7 xl:-ml-[47px] md:h-56 md:w-56"/>
            <h2 class="font-bold text-left pt-1 pl-1 text-base xl:top-8 xl:text-3xl xl:left-7 xl:relative">{{product.name}}</h2>
            <h3 class="font-light text-left pl-1 text-[19px] xl:text-4xl xl:absolute xl:ml-[240px] xl:mt-32">{{product.price}}€</h3>
        </div>
        <button class="text-[10px] border-[0,5px] h-6 w-16 m-2 relative left-9 text-white bg-slate-400 hover:bg-slate-800 border-black xl:h-12 xl:w-28 xl:text-lg xl:left-36 xl:bottom-12" @click="cartStore.addItemToCart(product)">Add to cart</button>
    </div>
</template>

<script>
import {useRouter} from 'vue-router';
import { useCartStore } from '../stores/cartStore';
import Swal from 'sweetalert2'

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
                Swal.fire({
                    position: 'top-end',
                    icon: 'info',
                    title: 'Info Item',
                    showConfirmButton: false,
                    timer: 700
        });
            }
        }

        return {goInfo,cartStore}
    }
}
</script>