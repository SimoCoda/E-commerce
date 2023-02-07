<template>
    <div v-if="this.product" class="w-[380px]">
        <img :src=product.image class="w-64 m-auto h-64 mb-14 border-2 border-black" />
        <div class="ml-5">
            <h1 class="text-3xl text-left font-bold mb-7">{{product.name}}</h1>
            <h1 class="text-left mb-5">{{product.description}}</h1>
            <h1 class="text-2xl text-left font-bold">{{product.price}}€</h1>
        </div>
    </div>
    <div class="z-20 static mt-5">
        <BaseButtons title="Add to cart" @click="cartStore.addItemToCart(product)" class="m-auto"/>
    </div>
</template>

<script>
import axios from "axios"
import BaseButtons from "./BaseButtons.vue";
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router'
import { useCartStore } from '../stores/cartStore';

export default {
    name : "ProductInfo",
    components: {
        BaseButtons
    },
    setup(){
        const product = ref([])
        const route = useRoute()
        const cartStore = useCartStore()

        onMounted(async () => {
            let res = await axios.get(`https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json`)
            const meatName = route.params.name
            let meatFilter = res.data.filter(product => product.name === meatName)
            product.value = meatFilter[0]
        })

        return {product,cartStore}
    },
}
</script>