/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import BotonCarrito from './BotonCarrito/BotonCarrito';
import Secciones from './Secciones/Secciones';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-info bg-opacity-75">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>Almacen de Barrio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
      <Secciones/>
      <BotonCarrito/>      
      
    </div>
    
  </div>
  
</nav>
    );
}

export default Navbar;
