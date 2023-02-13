<template>
    <IconBar class="-mt-1 pt-3 z-50" />
    <div class="absolute top-16 z-10 xl:top-36 md:top-32">
      <CartList class="xl:mb-20" />
    </div>
    <div class="fixed bottom-0 left-0 right-0 h-20 pt-5 z-50 xl:h-24 xl:pt-5 xl:mb-0 md:mb-3 md:pt-10 md:h-32">
      <BaseButtons title="Buy" @click="cartStore.emptyCart"/>
    </div>
  </template>
  
  <script>
  import IconBar from "../src/components/IconBar.vue";
  import BaseButtons from "../src/components/BaseButtons.vue";
  import CartList from "../src/components/CartList.vue";
  import { useCartStore } from "../src/stores/cartStore";
  
  export default {
    name: 'Cart',
    setup(){
        const cartStore = useCartStore();
        return {cartStore}
    },
    components: {
      IconBar,
      CartList,
      BaseButtons,
    },
  }
</script>