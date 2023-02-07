<template>
    <IconBar class="-mt-1 pt-3 z-50" />
    <div class="absolute top-16 z-10">
      <CartList class="" />
    </div>
    <div class="fixed bottom-0 left-0 right-0 h-16 bg-white z-50">
      <BaseButtons title="Buy" @click="cartStore.emptyCart()" class="mt-3"/>
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