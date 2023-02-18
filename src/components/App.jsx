import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import Contador from './Contador/Contador';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<ProductListContainer/>}/>
      <Route path='/categoria/:categoria' element={<ProductListContainer/>}/>
      </Routes>       
      <Contador />     
      <Footer/>

     </BrowserRouter>
    </div>
  );
}

export default App;
