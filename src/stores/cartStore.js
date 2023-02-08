import {defineStore} from 'pinia'
import {ref, watch} from 'vue'
import Swal from 'sweetalert2'

export const useCartStore = defineStore('cart', () => {

    let cart = ref({items: [], total: 0, cartLength: 0});

    const addItemToCart = (product) => {
        if(cart.value.items.filter(item => item.product.name === product.name).length > 0) {
            // Increase product quantity
            cart.value.items.map(item => {
                if(item.product.name === product.name){
                    item.quantity++ 
                    item.subtotal.toFixed(2) = item.product.price * item.quantity
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your item has been updated',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
        }else{
            // Add new product to cart
            cart.value.items.push({product,quantity: 1, subtotal: product.price})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1000
            });
        }
    }

    const removeItemFromCart = (i, quantity) => {
        cart.value.items.splice(i,1)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your item has been removed',
            showConfirmButton: false,
            timer: 1000
        });
    }

    const decreseItemFromCart = (product, i, quantity) => {
        cart.value.items.map(item => {
            if(item.product.name === product.name){
                if(item.quantity === 1){
                    items.value.splice(i,1)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your item has been removed',
                        showConfirmButton: false,
                        timer: 1000
                    });                  
                }else{
                    item.quantity--
                    item.subtotal = item.product.price * item.quantity
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your item has been updated',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            }
        }) 
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

    const emptyCart = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'The purchase was successful!',
            showConfirmButton: false,
            timer: 1500
        });
    }

    return {
        cart,
        addItemToCart,
        removeItemFromCart,
        decreseItemFromCart,
        emptyCart,  
    }
})