
import React, { useState } from 'react'

export const ItemCount = ({stock, valorInicial, onAdd}) => {

    const[cantidad, setCantidad] = useState(valorInicial)

    const aumentar = () => {
        (cantidad < stock) && setCantidad(cantidad+1) 
    }

    const disminuir = () => {
        (cantidad > 1) && setCantidad(cantidad-1)
    }

  return (
    <div className='Counter'>
        <div className='Controls'>
            <button className='Button' onClick={disminuir}>-</button>
            <h4 className='Number'>{cantidad}</h4>
            <button className='Button' onClick={aumentar}>+</button>
        </div>
        <div>
            <button className='Button' onClick={()=> onAdd(cantidad)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}
