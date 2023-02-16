import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
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
       <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
