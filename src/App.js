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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home comidas={comidas}/>}/>
          <Route path="/Detail/:id" element={<Detail comidas={comidas}/>}/>
          <Route path="/Shopcart" element={<Shopcart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
