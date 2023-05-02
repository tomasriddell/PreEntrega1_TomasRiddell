import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, img, categoria, descripcion, price, stock}) => {
  return (
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {name}
            </h2>
        </header>

        <picture>
            <img src={img} alt={name} className='ItemImg'/>
        </picture>

        <section>
            <p className='Info'>
                Categoría: ${categoria}
            </p>
            <p className='Info'>
                Descripción: {descripcion}
            </p>
            <p className='Info'>
                Precio: ${price}
            </p>
        </section>

        <footer className='ItemFooter'>
           <ItemCount valorInicial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada ', cantidad)} />
        </footer>
    </article>
  )
}
