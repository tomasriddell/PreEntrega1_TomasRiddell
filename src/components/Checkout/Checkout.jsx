import { useContext, useState } from "react";
import { db } from "../../services/firebase/firebaseConfig"
import { collection, query, where, getDocs, writeBatch, documentId, Timestamp, addDoc } from "firebase/firestore";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const {Cart, total, clearCart} = useContext (CartContext)

    const createOrder = async ({ name, phone, email }) => {

        setLoading (true)

        try {
            const objOrder = {
                buyer: {
                    name: name, 
                    phone: phone, 
                    email: email
                },
                items: Cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch (db)
            const outOfStock = []
            const ids = Cart.map(prod => prod.id)
            const productsRef = collection(db, 'productos')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const {docs} = productsAddedFromFirestore


            //con esto se actualiza el stock del producto
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = Cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.cantidad

                if (stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'ordenes')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()

            } else {
                alert('Lo sentimos, hay productos que están fuera de stock')
            }

        } catch (error){
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

if (loading) {
    return <h1> Se está generando tu orden...</h1>
}

if (orderId) {
    return (
        <div>
            <h1> El Id de su pedido es: {orderId}</h1>
            <Link to="/" className='ui button'>Volver al home</Link>
        </div>
    )
}

return(
<div>
    <h1>Checkout</h1>
    <CheckoutForm onConfirm= {createOrder}/>
</div>
)
}