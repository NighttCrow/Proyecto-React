import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import Contador from './Contador/Contador';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductListContainer />
      <Footer />
      <Contador />

    </div>
  );
}

export default App;
