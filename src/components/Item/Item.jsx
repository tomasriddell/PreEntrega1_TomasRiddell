
import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id, name, img, price, stock}) => {
  return (
    <div  className='ui card five wide column pb-0 pl-0 pr-0 pt-0 mb-0 h-100'>

        <header className='content'>
            <h2 className='header'>
                {name}
            </h2>
        </header>

        <picture>
            <img src={img} alt={name} className='ui medium image'/>
        </picture>

        <section className='description'>
            <p className='Info mb-2'>
                Precio: ${price.toLocaleString()}
                <br />
                Stock: {stock}
            </p>
        </section>

        <footer className='ui bottom attached button'>
            <Link to={`/item/${id}`} >Ver Detalle </Link>
        </footer>
    </div>
     )
}
