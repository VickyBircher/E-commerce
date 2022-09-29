import "./App.css";
import Home from "./screens/Home";
import comidas from "./comidas.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./screens/Detail";
import Shopcart from "./screens/Shopcart";
import { CarritoProvider } from "./context/CarritoContext";
import { ComidasProvider } from "./context/ComidasContext";
import { ProductosElegidosProvider } from "./context/ProductosElegidosContext";

function App() {
  return (
    <>
      <ComidasProvider>
        <CarritoProvider>
          <ProductosElegidosProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home comidas={comidas} />} />
                <Route
                  path="/Detail/:id"
                  element={<Detail comidas={comidas} />}
                />
                <Route path="/Shopcart" element={<Shopcart />} />
              </Routes>
            </BrowserRouter>
          </ProductosElegidosProvider>
        </CarritoProvider>
      </ComidasProvider>
    </>
  );
}

export default App;
