import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import Contador from './Contador/Contador';
import Contacto from './Contacto/Contacto';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<ProductListContainer/>}/>
      <Route path='/categoria/:categoria' element={<ProductListContainer/>}/>
      <Route path='/carrito' element={<p>Carrito</p>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      </Routes>       
      <Contador />     
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
