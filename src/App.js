import './App.css';
import Home from './screens/Home';
import comidas from './comidas.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detail from './screens/Detail';
import Shopcart from './screens/Shopcart';
import { CarritoProvider } from './context/CarritoContext';
import { ComidasProvider } from './context/ComidasContext';

function App() {
  return (
    <>
      <ComidasProvider>
        <CarritoProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home comidas={comidas} />} />
              <Route path="/Detail/:id" element={<Detail comidas={comidas} />} />
              <Route path="/Shopcart" element={<Shopcart comidas={comidas} />} />
            </Routes>
          </BrowserRouter>
        </CarritoProvider>
      </ComidasProvider>
    </>
  );
}

export default App;
