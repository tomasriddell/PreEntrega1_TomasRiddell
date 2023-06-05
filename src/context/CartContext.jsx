import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext({
    Cart: []
})

export const CartProvider = ({children}) => {

    const [Cart, setCart] = useState([])

    const addItem = (item, quantity) => {

        const enCarro = Cart.filter(prod => prod.id === item.id)
        const cantidadEnCarro = enCarro ? enCarro.reduce((acc, item) => item.cantidad + acc, 0) : 0

        if( quantity <= (item.stock - cantidadEnCarro)){
            setCart(prev => [...prev, {...item, cantidad: quantity}])
        } else {
            alert('No queda suficiente stock del producto')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = Cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    // const isInCart = (itemId) => {
    //     return Cart.some(prod => prod.id === itemId)
    // }

    const cartQuantity = Cart.reduce((acc, prod) => acc + prod.cantidad, 0)

    const total = Cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)

  return (
    <CartContext.Provider value={{Cart, total, cartQuantity, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
  )
}
