import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({productos}) => {
  return (
    <div className=' ui grid justify-content-around align-items-end'>
        {productos.map( prod => {
          return <Item {...prod} key={prod.id}  />
        })}
    </div>
  )
}
