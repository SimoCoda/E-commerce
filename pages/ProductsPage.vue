<template>
    <IconBar class="-mt-1 pt-3 z-50" />
    <div class="ml-5 absolute top-20 z-10">
        <ProductList class=""/>
    </div>
</template>

<script>
import IconBar from "../src/components/IconBar.vue";
import ProductList from "../src/components/ProductList.vue";
import BaseButtons from "../src/components/BaseButtons.vue";

export default {
    name: 'Welcome',
    components: {
        IconBar,
        ProductList,
        BaseButtons,
    },    
}
</script>