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
      {/* <Home comidas={comidas}/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home comidas={comidas}/>}/>
          <Route path="/Detail/:id" element={<Detail comidas={comidas}/>}/>
          <Route path="/shopcart" element={<Shopcart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
