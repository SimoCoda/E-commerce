import {defineStore} from 'pinia'
import {ref, watch, computed} from 'vue'


export const useCartStore = defineStore('cart', () => {

    let cart = ref({items: [], total: 0, cartLength: 0});

    const addItemToCart = (product) => {
        if(cart.value.items.filter(item => item.product.name === product.name).length > 0) {
            // Increase product quantity
            cart.value.items.map(item => {
                if(item.product.name === product.name){
                    item.quantity++ 
                    item.subtotal = item.product.price * item.quantity
                }
            })
        }else{
            // Add new product to cart
            cart.value.items.push({product,quantity: 1, subtotal: product.price})
        }
    }

    const removeItemFromCart = (i, quantity) => {
        cart.value.items.splice(i,1)
    }

    const decreseItemFromCart = (product, i, quantity) => {
        cart.value.items.map(item => {
            if(item.product.name === product.name){
                if(item.quantity === 1){
                    items.value.splice(i,1)                   
                }else{
                    item.quantity--
                    item.subtotal = item.product.price * item.quantity
                }
            }
        }) 
    }

    const emptyCart = () => {
        cart.value.items = []
    }

    watch(cart.value.items, () => {
        let total = 0
        let itemsInCart = 0
        cart.value.items.forEach(item => {
            total +=  item.subtotal
            itemsInCart += item.quantity
        })
        cart.value.cartLength = itemsInCart
        if(cart.value.cartLength >= 3){
            cart.value.total = (total - [(total*10)/100]).toFixed(2)
        }else{
            cart.value.total = total
        }
    })


    return {
        cart,
        addItemToCart,
        removeItemFromCart,
        decreseItemFromCart,
        emptyCart,  
    }
})