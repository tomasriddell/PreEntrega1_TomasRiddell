

import React from 'react'

export const ItemListContainer = ({imagen, descripcion, precio}) => {
  return (
    <div className='col-3'>
        <div class="card">
          <img class="card-img-top " src={imagen} alt="Producto fotográfico"/>
          <div class="card-body">
             <p class="card-text">{descripcion}</p>
             <p>{precio}</p>
          </div>
        </div>
    </div>
  )
}
