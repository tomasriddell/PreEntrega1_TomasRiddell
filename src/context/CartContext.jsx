import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext({
    Cart: []
})

export const CartProvider = ({children}) => {

    const [Cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = Cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) => {
        return Cart.some(prod => prod.id === itemId)
    }


  return (
    <CartContext.Provider value={{Cart, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
  )
}
