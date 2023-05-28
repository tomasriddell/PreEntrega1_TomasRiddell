

import React, { useEffect, useState } from 'react'
// import { getProductsById } from '../../asyncMock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{

      setLoading(true)

      const docRef = doc(db, 'products', itemId)
  
        getDoc(docRef)
          .then(response=>{
              const data = response.data()
              const prouctAdapted = { id: response.id, ...data}
              setProducto(prouctAdapted)
            })

          .catch(error=>{
            console.log(error)
          })
          .finally(() => {
            setLoading(false)
          })

      },[itemId])

  return (
    <div className='ui items mt-5 container'>
        <ItemDetail {...producto} />
    </div>
  )
}
