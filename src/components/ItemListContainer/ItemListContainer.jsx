
// export const ItemListContainer = ({imagen, descripcion, precio}) => {
//   return (
//     // <div className='col-3'>
//     //     <div class="card">
//     //       <img class="card-img-top " src={imagen} alt="Producto fotográfico"/>
//     //       <div class="card-body">
//     //          <p class="card-text">{descripcion}</p>
//     //          <p>{precio}</p>
//     //       </div>
//     //     </div>
//     // </div>
    
//   )
// }

import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId) 
      .then(response =>{
        setProductos(response)
      })
      .catch(error => {
        console.error(error)
      })

  },[categoryId])

  return (
    <div className='container mt-5'>
      <h1>{greeting}</h1>
      <ItemList productos={productos}/>
    </div>
  )
}
