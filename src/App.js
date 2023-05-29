import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
       <div className='row d-flex flex-row justify-content-center mt-5'>

          <BrowserRouter>
            <CartProvider>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={"Tu rincón fotográfico"}/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
              </Routes>
            </CartProvider>
          </BrowserRouter>
        
        </div>
    </div>
  );
}

export default App;
