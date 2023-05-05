import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, img, categoria, descripcion, price, stock}) => {
  return (
    <div className='item'>

        <picture className=' ui small image'>
            <img src={img} alt={name}/>
        </picture>

        <div className='content'>
            <header>
                <h2 className='header'>
                    {name}
                </h2>
            </header>
        </div>

        <section className='d-flex flex-column align-items-start ml-3 mr-3   '>
            <p className='description text-left '>
                Descripción: {descripcion}
            </p>
            <p className='price'>
                Precio: ${price}
            </p>
            <p className='meta'>
                Categoría: {categoria}
            </p>
            
        </section>

        <footer className='ItemFooter'>
           <ItemCount valorInicial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada ', cantidad)} />
        </footer>
    </div>
  )
}
