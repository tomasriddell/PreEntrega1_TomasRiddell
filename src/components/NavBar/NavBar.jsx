
import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
// import logo from "./assets/logo.png"



export const NavBar = () => {

  return (


    <div className='d-flex flex-row justify-content-around mt-5 align-items-center row'>

        <div className='d-flex flex-row justify-content-evenly col-3'>
          {/* <img className='App-logo' src={logo} alt="logo de la tienda" /> */}
          <h1 className='ml-5 h2'>Lens Boutique</h1>
        </div>

        <div className='col-6'>
          <div className='container categorias '>
              <div className='row d-flex flex-row justify-content-around'>
                  <NavLink to={`/category/camaras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cámaras</NavLink>
                  <NavLink to={`/category/lentes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lentes</NavLink>
                  <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                  {/* <button className='col-3 btn btn-lg btn-light'>Cámaras</button>
                  <button className='col-3 btn btn-lg btn-light'>Lentes</button>
                  <button className='col-3 btn btn-lg btn-light'>Accesorios</button> */}
                  
              </div>
          </div>
        </div>

        <div className='col-3'>
            <CartWidget/>
        </div>

    </div>



)
}
