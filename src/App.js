import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <ProductListContainer />
      <Footer />

    </div>
  );
}

export default App;
