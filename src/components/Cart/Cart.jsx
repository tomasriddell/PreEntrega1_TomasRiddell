import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'

export const Cart = () => {
  const { Cart, clearCart, total} = useContext(CartContext)

  if(total === 0){
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    )
  }

  return(
    <div>
      {Cart.map(p => <CartItem key={p.id} {...p}/>)}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className='btn'>Limpiar carrito</button>
      <Link to='/checkout' className='Optiom'>Checkout</Link>
    </div>
  )
}
