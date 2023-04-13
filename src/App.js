import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import polaroid from "./components/ItemListContainer/assets/polaroid.jpeg"
import canon from "./components/ItemListContainer/assets/canon.jpeg"
import lente from "./components/ItemListContainer/assets/lente.jpeg"

function App() {
  return (
    <div className="App">
        <NavBar/>

        <div className='row d-flex flex-row justify-content-center mt-5'>
          <ItemListContainer 
          imagen={polaroid}
          descripcion="Cámara retro polaroid"
          precio="$49.000"
          />

          <ItemListContainer 
          imagen={canon}
          descripcion="Cámara Canon Reflex"
          precio="$79.000"
          />

          <ItemListContainer 
          imagen={lente}
          descripcion="Lente SIGMA 50mm"
          precio="$59.000"
          />
        </div>

    </div>
  );
}

export default App;
