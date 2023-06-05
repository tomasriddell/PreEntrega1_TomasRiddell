
import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
// import logo from "./assets/logo.png"


export const NavBar = () => {

  return (


    <div className='d-flex flex-row justify-content-around mt-5 mb-5 align-items-center row'>

        <div className='d-flex flex-row justify-content-evenly col-3'>
          {/* <img className='App-logo' src={logo} alt="logo de la tienda" /> */}
          <Link to="/" className='text-decoration-none '>
            <h1 className='ml-5 h2 text-black'>Lens Boutique</h1>
          </Link>
        </div>

        <div className='col-6'>
          <div className='container categorias '>
              <div className='row d-flex flex-row justify-content-around'>
                  
                  <NavLink to={`/category/Cámaras`} className={({isActive}) => isActive ? 'ActiveOption btn btn-lg btn-dark' : 'Option btn btn-lg btn-light'}>Cámaras</NavLink>
                  <NavLink to={`/category/Lentes`} className={({isActive}) => isActive ? 'ActiveOption btn btn-lg btn-dark' : 'Option btn btn-lg btn-light'}>Lentes</NavLink>
                  <NavLink to={`/category/Accesorios`} className={({isActive}) => isActive ? 'ActiveOption btn btn-lg btn-dark' : 'Option btn btn-lg btn-light'}>Accesorios</NavLink>
             
              </div>
          </div>
        </div>

        <div className='col-3'>
            <CartWidget/>
        </div>

    </div>



)
}
