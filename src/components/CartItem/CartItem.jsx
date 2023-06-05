import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({name, price, img, cantidad, id}) => {

    const {removeItem} = useContext (CartContext)

    return(
        <div className="container principal">
            <div className="d-flex flex-direction-row">
                <img className="ui small image" src={img} alt={name} />
                <section className="cartItem">
                    <h4>{name}</h4>
                    <div>Precio: ${price.toLocaleString()}</div>
                    <div>Cantidad: {cantidad}</div>
                    <div>Subtotal: ${(price * cantidad).toLocaleString()}</div>
                    <button onClick={() => removeItem(id)} className="ui small red button"> Eliminar producto </button>
                </section>
            </div>
        </div>
    )
}