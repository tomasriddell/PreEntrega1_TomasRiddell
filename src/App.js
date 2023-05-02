import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import polaroid from "./components/ItemListContainer/assets/polaroid.jpeg"
import canon from "./components/ItemListContainer/assets/canon.jpeg"
import lente from "./components/ItemListContainer/assets/lente.jpeg"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <div className='row d-flex flex-row justify-content-center mt-5'>
        
          <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
          </BrowserRouter>
        
        </div>
    </div>
  );
}

export default App;
