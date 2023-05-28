import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({nombre, precio, cantidad, id}) => {
    const {removeItem} = useContext (CartContext)

    return(
        <div className="container principal">
            <section className="cartItem">
                <h4>{nombre}</h4>
                <div>Precio: ${precio}</div>
                <div>Cantidad: ${cantidad}</div>
                <div>Subtotal: ${precio*cantidad}</div>
                <button onClick={() => removeItem(id)} className="boton"> Eliminar producto </button>
            </section>
        </div>
    )
}