

import React, { useEffect, useState } from 'react'
import { getProductsById } from '../../asyncMock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductsById(itemId)
          .then(response => {
            setProducto(response)
          })
          .catch(error => {
            console.error(error)
          })
      },[itemId])

  return (
    <div className='ui items mt-5 container'>
        <ItemDetail {...producto} />
    </div>
  )
}
