
import { useState } from 'react'

export const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')

    const handleConfirm = (event) => {
        event.preventDefault ()

        const userData = {
            name: name, 
            phone: phone, 
            email: email
        }

        onConfirm(userData)
    }

    return(
        <div className='container'>
            <form onSubmit={handleConfirm} className='ui form d-flex flex-column'>
                <div className="field">
                    <label>
                        Nombre
                        <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        />
                    </label>
                </div>

                <div className="field">
                    <label >
                        Teléfono
                        <input
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        />
                    </label>
                </div>

                <div className="field">
                    <label>
                        Email
                        <input
                        className='Input'
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        />
                    </label>
                </div>


                <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" />
                            <label>Suscribirme para recibir las mejores notas del profe Mauri</label>
                        </div>
                </div>

                <div className='Label'>
                        <button type='submit' className='ui blue button mt-3'>Crear Orden</button>
                </div>
            </form>
        </div>

    )
}