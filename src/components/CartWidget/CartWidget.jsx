import React from 'react'
import carrito from "./assets/carro.png"

export const CartWidget = () => {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center'>
            <img className='carrito' src={carrito} alt="" />
            <p className='numero-carrito ml-2'>2</p>
    </div>
  )
}
