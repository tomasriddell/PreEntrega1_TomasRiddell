
import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
// import logo from "./assets/logo.png"



export const NavBar = () => {

  return (


    <div className='d-flex flex-row justify-content-around mt-5 align-items-center row'>

        <div className='d-flex flex-row justify-content-evenly col-3'>
          {/* <img className='App-logo' src={logo} alt="logo de la tienda" /> */}
          <Link to="/" className='text-decoration-none '>
            <h1 className='ml-5 h2 text-black'>Lens Boutique</h1>
          </Link>
        </div>

        <div className='col-6'>
          <div className='container categorias '>
              <div className='row d-flex flex-row justify-content-around'>
                  
                  <NavLink to={`/category/camaras`} className={({isActive}) => isActive ? 'ActiveOption btn btn-lg btn-dark' : 'Option btn btn-lg btn-light'}>Cámaras</NavLink>
                  <NavLink to={`/category/lentes`} className={({isActive}) => isActive ? 'ActiveOption btn btn-lg btn-dark' : 'Option btn btn-lg btn-light'}>Lentes</NavLink>
                  <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption btn btn-lg btn-dark' : 'Option btn btn-lg btn-light'}>Accesorios</NavLink>
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
