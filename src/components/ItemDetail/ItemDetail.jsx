import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const ItemDetail = ({id, name, img, categoria, descripcion, price, stock}) => {

  const [cantidadAgregada, setcantidadAgregada] = useState(0)

  const {addItem} = useContext(CartContext)
  
  
  const handleonAdd = (cantidad) => {
    setcantidadAgregada(cantidad)
      
    const item = {
    id: id, 
    name: name,
    price: price,
    stock: stock,
    img: img
    }
  
    addItem(item, cantidad)
  }


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

            {
                cantidadAgregada > 0 ? (
                    <div className='d-flex flex-column justify-content-around'>
                        <Link to='/cart' className='ui green button mb-2'>Terminar compra</Link>
                        <Link to='/' className='ui blue button'>Seguir comprando</Link>
                    </div>
                ) : (
                    <ItemCount valorInicial={1} stock={stock} onAdd={handleonAdd} />
                )
            }
        </footer>
    </div>
  )
}
