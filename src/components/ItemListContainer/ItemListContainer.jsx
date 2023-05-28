
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
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore'



export const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams() 

  useEffect(()=>{

    setLoading(true)

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products")

      getDocs(collectionRef)
        .then(response=>{
          const productsAdapted = response.docs.map(doc=>{
            const data = doc.data()
            return { id: doc.id, ...data}
          })
          setProductos(productsAdapted)
        })
        .catch(error=>{
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })

  },[categoryId])

  return (
    <div className='container mt-5'>
      <h1>{greeting}</h1>
      <ItemList productos={productos}/>
    </div>
  )
}
