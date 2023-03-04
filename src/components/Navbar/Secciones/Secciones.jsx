import React from 'react';
import Categorias from '../Categorias/Categorias'  
import {Link} from 'react-router-dom';

const Secciones = () => {
    return (
        <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"../Contacto/Contacto"}>Contacto</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" element="#" role="button" aria-haspopup="true" aria-expanded="false">Productos por Categoría</Link>
          <div className="dropdown-menu">
            <Categorias/>
          </div>
        </li>
      </ul>
    );
}

export default Secciones;
