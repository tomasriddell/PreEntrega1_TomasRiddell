

import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore'


export const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams()

  useEffect(()=>{

    setLoading(true)

    const collectionRef = categoryId
      ? query(collection(db, "productos"), where("categoria", "==", categoryId))
      : collection(db, "productos")

      getDocs(collectionRef)
        .then(response => {
          const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data}
          })
          setProductos(productsAdapted)
          console.log(productsAdapted)
        })
        .catch(error=>{
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })

  },[categoryId])

  if (loading) {
    return <h1>Cargando productos</h1>
}


  return (
    <div className='container mt-5'>
      <h1>{greeting}</h1>
      <ItemList productos={productos}/>
    </div>
  )
}
