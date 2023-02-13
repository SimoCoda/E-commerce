import {defineStore} from 'pinia'
import {ref, watch, computed} from 'vue'
import Swal from 'sweetalert2'

export const useCartStore = defineStore('cart', () => {

    let cart = ref({items: [], total: 0});
    let itemsInCart = ref(0)

    const addItemToCart = (product) => {
        if(cart.value.items.filter(item => item.product.name === product.name).length > 0) {
            // Increase product quantity
            cart.value.items.map(item => {
                if(item.product.name === product.name){
                    item.quantity++ 
                    item.subtotal = (item.product.price * item.quantity).toFixed(2)
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
                    item.subtotal = (item.product.price * item.quantity).toFixed(2)
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
        let totalItem = 0
        cart.value.items.forEach(item => {
            total +=  item.subtotal
            totalItem += item.quantity
        })
        if(totalItem >= 3){
            cart.value.total = Math.round((total - (total/10))*100)/100
            itemsInCart.value = totalItem
        }else{
            cart.value.total = total
            itemsInCart.value = totalItem
        }
    })

    const emptyCart = () => {
        console.log("Acquisto completato!")
        cart.value.items.forEach(item => {
            cart.value.items.splice(item)
        })
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
        itemsInCart,
    }
})