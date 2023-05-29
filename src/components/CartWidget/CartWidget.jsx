import React, { useContext } from 'react'
import carrito from "./assets/carro.png"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const {total} = useContext(CartContext)

  return (
    // <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
    <Link to='/cart' className='CartWidget'>
      <img className='carrito' src={carrito} alt="cart-widget" />
      {total} 
    </Link>
  )
}
