import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'

export const Cart = () => {
  const { Cart, clearCart, cartQuantity, total} = useContext(CartContext)

  if(cartQuantity === 0){
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='ui blue button'>Ir a ver productos</Link>
      </div>
    )
  }

  return  (
    <div className='mt-5 mb-5'>
    
      {Cart.map(p => 
        <div className='mt-3 mb-5'>
          <CartItem key={p.id} {...p}/>
        </div>)}

      <h3>Total: ${total.toLocaleString()}</h3>
      <button onClick={() => clearCart()} className='ui small button'>Limpiar carrito</button>
      <Link to='/checkout' className='ui small blue button '>Checkout</Link>
      
    </div>
  )
}
