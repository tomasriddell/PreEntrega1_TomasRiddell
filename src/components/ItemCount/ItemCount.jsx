
import React, { useContext, useState } from 'react'

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
            <button className='ui small button' onClick={disminuir}>-</button>
            <h4 className='ui '>{cantidad}</h4>
            <button className='ui small button' onClick={aumentar}>+</button>
        </div>
        <div>
            <button className='ui small button primary mt-3 ' onClick={()=> onAdd(cantidad)} disabled={!stock}>
                <i className="shop icon mr-0"></i>
            </button>
        </div>
    </div>
  )
}
