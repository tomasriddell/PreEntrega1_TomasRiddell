

import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{

      setLoading(true)

      const docRef = doc(db, 'productos', itemId)

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


  if (loading) {
    return (
      <div className='container mt-5 mb-5'>
        <h1>Cargando productos</h1>
      </div>
    )
  }

  return (
    <div className='container ui items mt-5 '>
        <ItemDetail {...producto} />
    </div>
  )
}
